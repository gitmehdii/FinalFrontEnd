import React from 'react';

export const ThemeContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = React.useState(false);

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};