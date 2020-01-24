import React, { createContext, useReducer } from 'react'


const output = ''

export const OutputContext = createContext(output)

const OutputReducer = (state, action) => {
    switch (action.type) {
        case 'output':
            return state + action.payload
        default:
            return state;
    }
}


export const OutputProvider = ({children}) => {
    const [state, dispatch] = useReducer(OutputReducer, output)
    return (
        <OutputContext.Provider value = {[state, dispatch]} >
            {children}
        </OutputContext.Provider>
    )
}