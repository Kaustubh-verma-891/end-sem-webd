import React from 'react';
import { AppBar, Toolbar, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    return (
        <AppBar position="sticky" className="bg-black">
            <Toolbar className="justify-between bg-black">
                <div className="flex items-center">
                    <IconButton className="text-gray-200">
                        <MenuIcon sx={{ color: '#ffffff' }} />
                    </IconButton>
                    <Link to={'/'}><span className='text-white'>YouTube</span></Link>
                </div>

                <div className="flex items-center flex-1 max-w-2xl mx-4">
                </div>

                <div className="flex items-center">
                    {user ? (
                        <>
                            <IconButton className="text-gray-200">
                                <AccountCircleIcon sx={{ color: '#ffffff' }} />
                            </IconButton>
                            <Button color="inherit" onClick={() => {
                                logout();
                                navigate('/login');
                            }}>
                                Logout
                            </Button>
                        </>
                    ) : (
                        <Button color="inherit" onClick={() => navigate('/login')}>
                            Sign In
                        </Button>
                    )}
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
