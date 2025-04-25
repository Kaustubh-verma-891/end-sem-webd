import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await login(email, password);
        if (result.success) {
            navigate('/');
        } else {
            setError(result.message);
        }
    };

    return (
        <Box className="flex justify-center items-center min-h-screen bg-gray-900">
            <Paper className="p-8 w-96">
                <Typography variant="h5" className="mb-4">Login</Typography>
                {error && <Typography color="error" className="mb-4">{error}</Typography>}
                <form onSubmit={handleSubmit} className="space-y-4">
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
                        Login
                    </Button>
                </form>
                <Button
                    fullWidth
                    variant="text"
                    onClick={() => navigate('/signup')}
                    className="mt-2"
                >
                    Don't have an account? Sign up
                </Button>
            </Paper>
        </Box>
    );
}

export default Login;
