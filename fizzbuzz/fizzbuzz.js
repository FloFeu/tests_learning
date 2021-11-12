/**
 * @param {number} input 
 * @returns {string}
 */
const fizzbuzz = (input) => {
    let result = ""
    const mapValue = new Map([
        [3, "fizz"],
        [5, "buzz"],
        [7, "lazz"]
    ]
    )

    mapValue.forEach((value, key) => {
        if (
            (isMultipleOf(input, key)) ||
            containsDigit(input, key)) {
            result += value
        }
    })

    return result || input.toString()
}

/**
 * 
 * @param {number} input 
 * @param {number} modulo 
 * @returns {boolean}
 */
const isMultipleOf = (input, modulo) => {
    if (input % modulo === 0) {
        return true
    }
}

const containsDigit = (input, digit) => {
    if (input.toString().indexOf(digit) > -1) {
        return true
    }
}

module.exports = { fizzbuzz, isMultipleOf, containsDigit }