const fizzbuzzLib = require('./fizzbuzz.js')

describe('FizzBuzz Unit Test Suites', () => {
    it("should return fizz when input is a multiple of 3", () => {
        expect(fizzbuzzLib.fizzbuzz(3)).toBe("fizz")
    })

    it("should return buzz when input is a multiple of 5", () => {
        expect(fizzbuzzLib.fizzbuzz(10)).toBe("buzz")
    })

    it("should return fizz when input contains 3", () => {
        expect(fizzbuzzLib.fizzbuzz(13)).toBe("fizz")
    })

    it("should return fizzbuzz when input is a multiple of 3 and 5", () => {
        expect(fizzbuzzLib.fizzbuzz(30)).toBe("fizzbuzz")
    })

    it("should return lazz when input is divisible by 7", () => {
        expect(fizzbuzzLib.fizzbuzz(14)).toBe("lazz")
    })

    it('should return fizzlazz when input is divisible by 3 and 7', () => {
        expect(fizzbuzzLib.fizzbuzz(21)).toBe("fizzlazz")
    })

    it("should return input if it doesn't check any cases", () => {
        expect(fizzbuzzLib.fizzbuzz(1)).toBe('1')
    })

    
})

describe("IsMultipleOf Unit Test Suite", () => {
    it('should return true if the number param is divisible by the modulo param', () => {
        expect(fizzbuzzLib.isMultipleOf(3, 3)).toBeTruthy()
    })

    it('should return false if the number param is not divisible by the modulo param', () => {
        expect(fizzbuzzLib.isMultipleOf(4, 3)).toBeFalsy()
    })
})

describe("containsDigit Unit Test Suite", () => {
    it("should return undefined if no number is passed", () => {
        expect(fizzbuzzLib.containsDigit("f", 7)).toBeUndefined()
    })

    it('should return true if the number contains 3', () => {
        expect(fizzbuzzLib.containsDigit(13, 3)).toBeTruthy()
    })
    
    it('should return false if the numbers does not contains 3, 5 or 7', () => {
        expect(fizzbuzzLib.containsDigit(14, 5)).toBeFalsy()
    })
})