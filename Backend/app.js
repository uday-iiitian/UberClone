const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db')
const userRoutes = require('./routes/user-routes');
const captainRoutes = require('./routes/captain-routes');
const cookieParser = require('cookie-parser');

connectToDb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    console.log("to kaise hai aap log");
    res.send("Welcome to Uber Clone API");
});

app.use('/users', userRoutes);

app.use('/captains', captainRoutes);

module.exports = app;