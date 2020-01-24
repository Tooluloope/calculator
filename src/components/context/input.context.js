import React, { createContext, useReducer } from 'react'
import { inputNumbers } from './calc.utils'


const input = undefined

export const InputContext = createContext(input)

const InputReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_NUMBERS':
            return  inputNumbers( state , action.payload)
        case 'INPUT_OPERATORS':
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