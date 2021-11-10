const fizzbuzzLib = require('./fizzbuzz.js')

describe('FizzBuzz Unit Test Suites', () => {
    it("should return fizz when input is a multiple of 3", () => {
        expect(fizzbuzzLib.fizzbuzz(3)).toBe("fizz")
    })

    it("should return buzz when input is a multiple of 5", () => {
        expect(fizzbuzzLib.fizzbuzz(10)).toBe("buzz")
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

    it('should return true if the number param is divisible by the modulo param', () => {
        expect(fizzbuzzLib.isMultipleOf(3, 3)).toBeTruthy()
    })

    it('should return false if the number param is not divisible by the modulo param', () => {
        expect(fizzbuzzLib.isMultipleOf(4, 3)).toBeFalsy()
    })
})

