export const inputNumbers = (state, payload) => {
    const val = "" + state.input + payload.input
    if(state.eval === true || state.eval === false) {
        const evals = payload.eval
        return {input: val, eval: evals}
    }
    
    return {input: val, eval: undefined}
}

export const inputOperators = (state, payload) => {
    if (state.input.length < 1){
        return state
    }
    if (isNaN(+state.input.toString().split('').pop())) {
        return state
    }
    
    const val = "" + state.input + payload.input
    
    const evals = payload.eval
    return {input: val, eval: evals}

}