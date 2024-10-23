import React, { createContext, useState, useEffect } from 'react';

// Create a context
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if the user is already logged in on initial load
        const storedLoginStatus = localStorage.getItem('isLoggedIn');
        if (storedLoginStatus === 'true') {
            setIsLoggedIn(true);  // Set to true if found in localStorage
        }
    }, []);

    // Function to handle login
    const login = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');  // Persist login state
    };

    // Function to handle logout
    const logout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');  // Remove login state from localStorage
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
