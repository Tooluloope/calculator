import React, { createContext, useReducer } from 'react'
import { inputNumbers,inputOperators } from './calc.utils'


const initialState = {
    input: '',
    eval: undefined
}

export const InputContext = createContext(initialState)

const InputReducer = (state, action) => {
    
    switch (action.type) {
        
        case 'INPUT_NUMBERS':
            return  inputNumbers( state , action.payload)
        case 'INPUT_OPERATORS':
            return inputOperators( state , action.payload)
        case 'DELETE_INPUT':
            return action.payload
        default:
            return state;
    }
}


export const InputProvider = ({children}) => {
    const [state, dispatch] = useReducer(InputReducer, initialState)
    return (
        <InputContext.Provider value = {[state, dispatch]} >
            {children}
        </InputContext.Provider>
    )
}