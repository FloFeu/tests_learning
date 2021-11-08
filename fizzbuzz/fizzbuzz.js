/**
 * @param {number} input 
 * @returns {string}
 */

const fizzbuzz = (input) => {
    if (isMultipleOf3(input) && isMultipleOf5(input)) {
        return "fizzbuzz"
    } else if (isMultipleOf3(input)) {
        return "fizz"
    } else if (isMultipleOf5(input)) {
        return "buzz"
    } else {
        return input.toString()
    }
}

const isMultipleOf3 = (input) => {
    if (input % 3 === 0) {
        return true
    }
}

const isMultipleOf5 = (input) => {
    if (input % 5 === 0) {
        return true
    }
}

module.exports = fizzbuzz;