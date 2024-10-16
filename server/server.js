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

app.get('/doctorlist', async (req, res) => {
    try {
        // Fetch doctors with role as 'doctor' and their doctor_info field
        const doctors = await User.find(
            { role: "doctor" },
            { name: 1, doctor_info: 1, _id: 0 } // Project only name and doctor_info
        );

        // Log the raw data to inspect the fetched doctor objects
        // console.log('Fetched Doctors:', doctors);

        const formattedDoctors = doctors.map(doctor => {
            // console.log('Doctor Info:', doctor.doctor_info); // Log doctor_info before formatting
            return {
                name: doctor.name,
                speciality: doctor.doctor_info?.specialization || 'N/A' // Map specialization
            };
        });


        // Send formatted doctor data as JSON response
        res.json({ doctors: formattedDoctors });
    } catch (err) {
        console.error('Error fetching doctors:', err);
        res.status(500).json({ message: 'Error fetching doctors list' });
    }
});

app.post('/doctorSearchQuery', async (req, res) => {
    try {
      const { searchQuery } = req.body;
      console.log('Search Query:', searchQuery);
  
      if (!searchQuery) {
        return res.status(400).json({ error: 'Search query is required' });
      }
  
      const result = await User.aggregate([
        // Match only documents with role "doctor"
        { $match: { role: "doctor" } },
        
        // Add a field to check if the name matches the provided doctor name
        { $addFields: {
          isSpecificDoctor: {
            $cond: [
              { $regexMatch: { input: "$name", regex: searchQuery, options: "i" } },
              0,
              1
            ]
          }
        }},
        
        // Sort first by isSpecificDoctor (0 first), then by name
        { $sort: {
          isSpecificDoctor: 1,
          name: 1
        }},
        
        // Remove the temporary isSpecificDoctor field
        { $project: {
          isSpecificDoctor: 0,
          password: 0 // Exclude password from the results for security
        }}
      ]);
      console.log(result);
      
      res.json({doctorsList: result});
    } catch (error) {
      console.error('Error in doctor search:', error);
      res.status(500).json({ error: 'An error occurred while searching for doctors' });
    }
  });



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    
});
