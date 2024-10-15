import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import session from "express-session";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

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
mongoose.connect('mongodb://localhost:27017/hy', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Define user schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    role: { type: String, required: true, enum: ['user', 'doctor', 'pharma', 'lab'] }
}, { timestamps: true });

const User = mongoose.model('users', userSchema);

// Login route
app.post('/login', async (req, res) => {
    const { phoneNumber, password } = req.body;
    try {
        const user = await User.findOne({ phone: phoneNumber, password });
        console.log(user);
        if (!user) {
            return res.status(401).json("Login failed");
        }
        
        req.session.userId = user;
        //console.log(req.session)
        req.session.save(); 
        console.log(req.session);
        return res.json({ message: "Login successful",
            user: user
         });
    } catch (err) {
        console.log('Error during login:', err);
        return res.status(500).json("Server error");
    }
});

app.get('/profile', async (req, res) => {
    console.log(req.session)
    if (!req.session.userId) {
        return res.status(401).json("Unauthorized");
    }

    try {
        const user = await User.findById(req.session.userId); 
        if (!user) return res.status(404).json("User not found");

        console.log(`User's phone number: ${user.phone}`); 

        return res.json({ 
            message: "Profile fetched successfully", 
            user: user
        });  

    } catch (err) {
        console.log('Error fetching profile:', err);
        return res.status(500).json("Error fetching profile");
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
