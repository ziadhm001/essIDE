const express = require('express');
const cors = require('cors');
const router = express.Router();
const corsOptions = {
    origin: "http://localhost:3000"
};

// Controller Functions
const {signupUser, loginUser} = require('../controllers/userController');

// Login Route
router.post('/login',cors(corsOptions),loginUser)

// Signup Route
router.post('/signup',cors(corsOptions),signupUser )

module.exports = router;