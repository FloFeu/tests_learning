const fizzbuzz = require('./fizzbuzz.js')

describe('FizzBuzz Unit Test Suites', () => {
    it("should return fizz when input is a multiple of 3", () => {
        expect(fizzbuzz(3)).toBe("fizz")
    })

    it("should return buzz when input is a multiple of 5", () => {
        expect(fizzbuzz(10)).toBe("buzz")
    })

    it("should return fizzbuzz when input is a multiple of 3 and 5", () => {
        expect(fizzbuzz(30)).toBe("fizzbuzz")
    })

    it("should return input if it doesn't check any cases", () => {
        expect(fizzbuzz(1)).toBe('1')
    })
})