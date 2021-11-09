/**
 * @param {number} input 
 * @returns {string}
 */
const fizzbuzz = (input) => {
    if (isMultipleOf(input, 15)) {
        return "fizzbuzz"
    } else if (isMultipleOf(input, 3)) {
        return "fizz"
    } else if (isMultipleOf(input, 5)) {
        return "buzz"
    } else {
        return input.toString()
    }
}

const isMultipleOf = (input, modulo) => {
    if (input % modulo === 0) {
        return true
    }
}

module.exports = { fizzbuzz, isMultipleOf }