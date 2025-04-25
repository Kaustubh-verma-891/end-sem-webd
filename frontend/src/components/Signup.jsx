import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await signup(name, email, password);
        if (result.success) {
            navigate('/');
        } else {
            setError(result.message);
        }
    };

    return (
        <Box className="flex justify-center items-center min-h-screen bg-gray-900">
            <Paper className="p-8 w-96">
                <Typography variant="h5" className="mb-4">Sign Up</Typography>
                {error && <Typography color="error" className="mb-4">{error}</Typography>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <TextField
                        fullWidth
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button fullWidth variant="contained" type="submit">
                        Sign Up
                    </Button>
                </form>
                <Button
                    fullWidth
                    variant="text"
                    onClick={() => navigate('/login')}
                    className="mt-2"
                >
                    Already have an account? Login
                </Button>
            </Paper>
        </Box>
    );
}

export default Signup;
