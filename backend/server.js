const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 8080;
const authRoute = require('./routes/auth.route');

mongoose.connect('mongodb://localhost:27017/youtube')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRoute);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})