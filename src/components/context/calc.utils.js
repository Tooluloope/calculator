import { trailZero } from "../utils"

// returns a new state once a number is inputed
export const inputNumbers = (state, payload) => {

    // state is a string for concat sake
    const val =  state.input + payload.input

    if(state.input === '0' && payload.input === '0' ) {
        
        return state
    }
    if(state.input === '0') {
        
        return {input: trailZero(val), eval: undefined}
    }

    // eval is initial undefined, if eval is true, it evaluates to output
    // once a number is clicked , eval is true as long as it previously wasn't undefined

    if(state.eval === true || state.eval === false) {
        const evals = payload.eval
        return {input: val, eval: evals}
    }
    // if (state.input === '0') {
    //     return {input: payload.input, eval: undefined}
    // }
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

    return{input: eval(state.input).toLocaleString('en')}
}

// Get reading mode theme
export const getMode = () => {
    const isReturningUser = "dark" in localStorage;
    const userPreference = getUserPreference()
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    
    
    // if user has a default system reading mode
    if(userPreference) {
      
      return userPreference;
    }
     // if mode was saved --> dark / light
     else if (isReturningUser ) {
      return savedMode;
    } 
    return false
  }
// get user's system preference
const getUserPreference = () => {
    if (window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
    }
  }

export const setMode = (payload) => {
    storeInLocalStorage(!payload)
    return !payload
}

// Store darkMode value in local storage
const storeInLocalStorage = (payload) => {
    localStorage.setItem("dark", JSON.stringify(payload));
}