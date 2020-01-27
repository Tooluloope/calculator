import React, { createContext, useReducer } from 'react'
import { getMode, setMode } from './calc.utils'


const darkMode = getMode()

export const ThemeContext = createContext(darkMode)

const ThemeReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_MODE':
            return setMode(state)  
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