/**
 * 
 * @param {number} input 
 * @returns {string}
 */
const foobarqix = (input) => {
    let result = '';

    if (!moduloFunction(input, 3) && !moduloFunction(input, 5) && !moduloFunction(input, 7)) {
        return result = input.toString().replace('0', '*')
    }

    if (moduloFunction(input, 3)) result += "Foo";
    if (moduloFunction(input, 5)) result += "Bar";
    if (moduloFunction(input, 7)) result += "Qix";

    [...input.toString()].forEach(number => {
        if (matchFunction(number, /0/)) result += "*";
        if (matchFunction(number, /3/)) result += "Foo";
        if (matchFunction(number, /5/)) result += "Bar";
        if (matchFunction(number, /7/)) result += "Qix";
    })

    return result
}

const moduloFunction = (input, value) => {
    if (input % value === 0) {
        return true
    }
}

const matchFunction = (number, value) => {
    if (number.match(value)) {
        return true
    }
}

module.exports = foobarqix;