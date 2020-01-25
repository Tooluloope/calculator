// returns a new state once a number is inputed
export const inputNumbers = (state, payload) => {

    // state is a string for concat sake
    const val =  state.input + payload.input

    // eval is initial undefined, if eval is true, it evaluates to output
    // once a number is clicked , eval is true as long as it previously wasn't undefined
    if(state.eval === true || state.eval === false) {
        const evals = payload.eval
        return {input: val, eval: evals}
    }
    
    return {input: val, eval: undefined}
}
// returns a new state once an operator is inputed

export const inputOperators = (state, payload) => {
    // operator wont work if there's no input
    if (state.input.length < 1){
        return state
    }
    // operator wont work if previous input isn't a number
    if (isNaN(+state.input.toString().split('').pop())) {
        return state
    }
    
    const val =  state.input + payload.input
    
    const evals = payload.eval
    return {input: val, eval: evals}

}

export const evalInput = (state) => {
    if (state.input.length < 1){
        return state
    }

    if (isNaN(+state.input.toString().split('').pop())) {
        return state
    }

    return{input: eval(state.input)}
}