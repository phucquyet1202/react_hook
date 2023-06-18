import React, { createContext, useState } from 'react'

export const themeContext = createContext()
// console.log(themeContext);

const ThemeContext = ({ children }) => {
    const [theme, setThem] = useState('light')
    const handleClick = () => {
        // console.log(theme);
        return setThem(theme === 'light' ? 'dark' : 'light')
    }
    const value = {
        theme,
        handleClick
    }

    return (
        <div>
            <themeContext.Provider value={value}>
                {children}
            </themeContext.Provider>
        </div>
    )
}

export default ThemeContext