const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();
const { expressjwt } = require('express-jwt');

app.use(express.json());
app.use(morgan('dev'));

async function connectToDb(){
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to the Database');
    } catch (error) {
        console.log(error);
    }
}

connectToDb();

app.use('/api/auth', require('./routes/authRouter'));
app.use('/api/main', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }));
app.use('/api/main/students', require('./routes/studentRouter'));

app.use((err, req, res, next) => {
    console.log(err);

    if(err.name === "UnauthorizedError") {
        res.status(err.status);
    }

    return res.send({errMsg: err.message});
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})