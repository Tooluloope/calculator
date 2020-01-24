export const inputNumbers = (state, int) => {

    if (state == null) return parseInt(int)

    return "" + state + int
}