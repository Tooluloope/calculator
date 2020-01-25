// turn integers to strings 
export const toLocale = (state) =>  parseInt(state).toLocaleString('en')

export const displayEval = (state) => toLocale(eval(state))

export const trailZero = (str) => str.replace(/^0+/, '')
