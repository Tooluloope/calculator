import React, { createContext, useReducer } from 'react'


const input = ''

export const InputContext = createContext(input)

const InputReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT':
            return state + action.payload
        default:
            return state;
    }
}


export const InputProvider = ({children}) => {
    const [state, dispatch] = useReducer(InputReducer, input)
    return (
        <InputContext.Provider value = {[state, dispatch]} >
            {children}
        </InputContext.Provider>
    )
}