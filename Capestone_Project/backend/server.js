// server.js

// 1. Import Packages
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const multer = require('multer');
require('dotenv').config(); 

// 2. Initialize Express App & Multer
const app = express();
const PORT = process.env.PORT || 5000;
const upload = multer(); 

// 3. Middleware
app.use(cors()); 
// --- FIX: We remove the global express.json() middleware to prevent conflicts ---
// It will be applied directly to the route that needs it (login).

// 4. Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => console.error('Connection error', err));

// 5. Define a User Schema and Model
const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dob: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    identityType: { type: String, required: true },
    identityNumber: { type: String, required: true },
    hasDriversLicense: { type: Boolean, default: false },
});

const User = mongoose.model('User', userSchema);

// 6. API Route for Registration (Handles form data with files)
app.post('/api/register', upload.any(), async (req, res) => {
    try {
        console.log('Received registration data:', req.body);
        const { fullName, email, password, dobDay, dobMonth, dobYear, phone, address, identityType, identityNumber } = req.body;

        if (!dobDay || !dobMonth || !dobYear) {
            return res.status(400).json({ message: 'Date of birth is incomplete.' });
        }
        const dob = `${dobYear}-${String(dobMonth).padStart(2, '0')}-${String(dobDay).padStart(2, '0')}`;
        const hasDriversLicense = req.body.hasDriversLicense === 'true';

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists.' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName, email, password: hashedPassword, dob, phone, address,
            identityType, identityNumber, hasDriversLicense,
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully!' });

    } catch (error) {
        console.error('--- REGISTRATION ERROR ---', error);
        res.status(500).json({ message: 'Server error during registration.' });
    }
});

// --- CORRECTED: API Route for Login ---
// We add express.json() as a middleware specifically for this route.
app.post('/api/login', express.json(), async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(`Attempting login for email: ${email}`);

        const user = await User.findOne({ email });
        if (!user) {
            console.log(`Login failed: No user found for email ${email}`);
            return res.status(400).json({ message: 'Invalid credentials. Please try again.' });
        }

        console.log(`User found: ${user.fullName}`);

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log(`Login failed: Password incorrect for user ${email}`);
            return res.status(400).json({ message: 'Invalid credentials. Please try again.' });
        }

        console.log(`Login successful for user: ${email}`);
        res.status(200).json({ message: 'Login successful!', user: { fullName: user.fullName } });

    } catch (error) {
        console.error('--- LOGIN ERROR ---', error);
        res.status(500).json({ message: 'Server error during login.' });
    }
});


// 7. Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
