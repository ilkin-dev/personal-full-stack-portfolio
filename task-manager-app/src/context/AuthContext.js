import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const register = async (username, password) => {
        try {
            await axios.post('http://localhost:5000/register', { username, password });
            login(username, password);
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    const login = async (username, password) => {
        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });
            const { token } = response.data;
            localStorage.setItem('token', token);
            setUser({ username });
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
