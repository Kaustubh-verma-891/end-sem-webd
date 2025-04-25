const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/user.model');
const router = express.Router();

const JWT_SECRET = 'secret';

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ message: 'Please provide email and password' });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ message: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ message: 'Invalid credentials' });
        }
        user.password = undefined;
        const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true, secure: true });
        return res.json({ message: 'Login successful', user });
    } catch (error) {
        console.log(error);

        return res.json({ message: 'Server error' });
    }
}

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.json({ message: 'Please provide all fields' });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        newUser.password = undefined;
        const token = jwt.sign({ id: newUser._id, email: newUser.email }, JWT_SECRET, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true, secure: true });
        return res.json({ message: 'Registration successful', user: newUser });
    } catch (error) {
        console.log(error);

        return res.json({ message: 'Server error' });
    }
}

const logout = async (req, res) => {
    try {
        res.clearCookie('token');
        return res.json({ message: 'Logout successful' });
    } catch (error) {
        return res.json({ message: 'Server error' });
    }
}

router.post('/login', login);
router.post('/register', register);
router.post('/logout', logout);

module.exports = router;