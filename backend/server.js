// Requires

const express = require('express');
const mongoose = require('mongoose')
require("dotenv").config();
const cors = require('cors');
const app = express();
const essRoutes = require('./routes/ess');
const userRoutes = require('./routes/user');

mongoose.set('strictQuery', false);



/****** Main backend ******/

// Create express application and apply cors
app.use(cors());
app.use(express.json());

// Setting routes
app.use('/api/ess/', essRoutes);
app.use('/api/user/', userRoutes);

// Connect to database & start server!
mongoose.connect(process.env.ATLAS_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Example app listening at http://localhost:${process.env.PORT}`);
    });
})
.catch(error => {
    console.error(error);
})

