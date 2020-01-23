
import React, { createContext, useReducer } from 'react'


const darkMode = false

export const ThemeContext = createContext(darkMode)

const ThemeReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_MODE':
            return !state  
        default:
            return state;
    }
}


export const ThemeProvider = ({children}) => {
    const [state, dispatch] = useReducer(ThemeReducer, darkMode)
    return (
        <ThemeContext.Provider value = {[state, dispatch]} >
            {children}
        </ThemeContext.Provider>
    )
}