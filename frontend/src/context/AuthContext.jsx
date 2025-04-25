import { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:8080/auth/login',
                { email, password },
                { withCredentials: true }
            );
            if (response.data.user) {
                setUser(response.data.user);
                return { success: true };
            }
            return { success: false, message: response.data.message };
        } catch (error) {
            return { success: false, message: error.response?.data?.message || 'Server error' };
        }
    };

    const signup = async (name, email, password) => {
        try {
            const response = await axios.post('http://localhost:8080/auth/register',
                { name, email, password },
                { withCredentials: true }
            );
            console.log(response);

            if (response.data.user) {
                setUser(response.data.user);
                return { success: true };
            }
            return { success: false, message: response.data.message };
        } catch (error) {
            return { success: false, message: error.response?.data?.message || 'Server error' };
        }
    };

    const logout = async () => {
        await axios.post('http://localhost:8080/auth/logout', {},
            { withCredentials: true }
        );
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
