import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import session from "express-session";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { Server } from "socket.io";
import http from "http";
// import { console } from "inspector";

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.json());

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 // 1 day
    }
}));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/hy')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    role: { type: String, required: true, enum: ['user', 'doctor', 'pharma', 'lab'] }
}, { timestamps: true });

const User = mongoose.model('users', userSchema);

// Define Appointment Schema
const appointmentSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'users' },
    doctorId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'users' },
    dateTime: { type: Date, required: true },
    status: { type: String, enum: ['scheduled', 'completed', 'cancelled'], required: true },
    reason: { type: String },
    notes: { type: String },
}, { timestamps: true });

const Appointment = mongoose.model('appointments', appointmentSchema);


// Create HTTP server for Socket.io
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true
    }
});

// Object to store the users in each room
const rooms = {};

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Listen for the user to join a room
    socket.on('join-room', (roomId) => {
        console.log(`User ${socket.id} joined room: ${roomId}`);
        socket.join(roomId);

        if (!rooms[roomId]) {
            rooms[roomId] = [];
        }
        rooms[roomId].push(socket.id);

        // Notify the user about other participants in the room
        const otherUsers = rooms[roomId].filter(id => id !== socket.id);
        socket.emit('get-users-in-room', otherUsers);

        // Notify all users in the room that a new user has joined
        socket.broadcast.to(roomId).emit('user-joined', socket.id);
    });

    // Handle offer from one user and send it to others in the same room
    socket.on('offer', ({ offer, userId }) => {
        console.log(`Sending offer from ${socket.id} to ${userId}`);
        io.to(userId).emit('offer', { offer, userId: socket.id });
    });

    // Handle answer and send it to others in the same room
    socket.on('answer', ({ answer, userId }) => {
        console.log(`Sending answer from ${socket.id} to ${userId}`);
        io.to(userId).emit('answer', { answer, userId: socket.id });
    });

    // Handle ICE candidates
    socket.on('ice-candidate', ({ candidate, userId }) => {
        console.log(`Sending ICE candidate from ${socket.id} to ${userId}`);
        io.to(userId).emit('ice-candidate', { candidate, userId: socket.id });
    });

    // Handle user disconnect
    socket.on('disconnect', () => {
        console.log(`User ${socket.id} disconnected`);
        for (let roomId in rooms) {
            rooms[roomId] = rooms[roomId].filter(id => id !== socket.id);
            if (rooms[roomId].length === 0) {
                delete rooms[roomId]; // Clean up room if empty
            }
            socket.broadcast.to(roomId).emit('user-left', socket.id);
        }
    });
});

// Login route
app.post('/login', async (req, res) => {
    const { phoneNumber, password } = req.body;
    console.log("hello")
    try {
        const user = await User.findOne({ phone: phoneNumber, password });
        if (!user) {
            return res.status(401).json("Login failed");
        }

        req.session.userId = user._id;
        req.session.save();
        return res.json({
            message: "Login successful",
            user: user
        });
    } catch (err) {
        console.log('Error during login:', err);
        return res.status(500).json("Server error");
    }
});

app.get('/profile', async (req, res) => {
    if (!req.session.userId) {
        return res.status(401).json("Unauthorized");
    }

    try {
        const user = await User.findById(req.session.userId);
        if (!user) return res.status(404).json("User not found");

        return res.json({
            message: "Profile fetched successfully",
            user: user
        });

    } catch (err) {
        console.log('Error fetching profile:', err);
        return res.status(500).json("Error fetching profile");
    }
});

app.get('/doctorlist', async (req, res) => {
    try {
        const doctors = await User.find({ role: "doctor" }, { name: 1, doctor_info: 1, _id: 0 });

        const formattedDoctors = doctors.map(doctor => ({
            name: doctor.name,
            speciality: doctor.doctor_info?.specialization || 'N/A'
        }));

        res.json({ doctors: formattedDoctors });
    } catch (err) {
        console.error('Error fetching doctors:', err);
        res.status(500).json({ message: 'Error fetching doctors list' });
    }
});

app.post('/doctorSearchQuery', async (req, res) => {
    try {
        const { searchQuery } = req.body;
        if (!searchQuery) {
            return res.status(400).json({ error: 'Search query is required' });
        }

        const result = await User.aggregate([
            { $match: { role: "doctor" } },
            {
                $addFields: {
                    isSpecificDoctor: {
                        $cond: [
                            { $regexMatch: { input: "$name", regex: searchQuery, options: "i" } },
                            0,
                            1
                        ]
                    }
                }
            },
            { $sort: { isSpecificDoctor: 1, name: 1 } },
            { $project: { isSpecificDoctor: 0, password: 0 } }
        ]);

        res.json({ doctorsList: result });
    } catch (error) {
        console.error('Error in doctor search:', error);
        res.status(500).json({ error: 'An error occurred while searching for doctors' });
    }
});

// Update Appointment Route
app.put('/appointment', async (req, res) => {
    console.log(req.body);
    // console.log(req.session.userId);

    const patientId  = req.session.userId;
    const {doctorId, dateTime, reason, notes } = req.body;
    console.log(doctorId+"  "+patientId+dateTime+reason+notes);
    
    if (!patientId) {
        return res.status(401).json({ error: "User not logged in" });
    }

    try {
        // Step 1: Define new document with all necessary fields
        const newAppointment = new Appointment({
            patientId: patientId,
            doctorId: doctorId,
            dateTime: new Date(dateTime), 
            status: "scheduled", // default status for new appointments
            reason: reason,
            notes: notes
        });

        // Step 2: Save document, triggering an insert operation
        const savedAppointment = await newAppointment.save();

        // Respond with the newly saved appointment document
        res.status(201).json({
            message: "Appointment successfully created",
            appointment: savedAppointment
        });
    } catch (error) {
        console.error('Error saving appointment:', error);
        res.status(500).json({ error: "Server error while creating appointment" });
    }
    // try {
    //     const updatedAppointment = await Appointment.findByIdAndUpdate(
    //         id,
    //         { dateTime, status, reason, notes, updatedAt: new Date() },
    //         { new: true }
    //     );

    //     if (!updatedAppointment) {
    //         return res.status(404).json({ message: 'Appointment not found' });
    //     }

    //     res.json({
    //         message: 'Appointment updated successfully',
    //         appointment: updatedAppointment
    //     });
    // } catch (error) {
    //     console.error('Error updating appointment:', error);
    //     res.status(500).json({ message: 'Server error' });
    // }
});



server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
