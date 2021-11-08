

const foobarqix = require('./foobarqix.js');

describe('FooBarQix Unit Tests Suites', () => {
    it('should return Foo if input is divisible by 3', () => {
        expect(foobarqix(6)).toContain("Foo")
    })

    it('should return Bar if input is divisible by 5', () => {
        expect(foobarqix(5)).toContain("Bar")
    })

    it('should return Qix if input is divisible by 7', () => {
        expect(foobarqix(7)).toContain("Qix")
    })

    it('should return FooBar if input is divisible by 3 and 5', () => {
        expect(foobarqix(15)).toContain("FooBar")
    })

    it('should return FooQix if input is divisible by 3 and 7', () => {
        expect(foobarqix(21)).toContain("FooQix")
    })

    it('should add "Foo" for each 3 present in the input', () =>{
        expect(foobarqix(33)).toContain("FooFooFoo")
    })

    it('should add "Bar" for each 5 present in the input', () =>{
        expect(foobarqix(55)).toContain("BarBarBar")
    })

    it('should add "Qix" for each 7 present in the input', () =>{
        expect(foobarqix(77)).toContain("QixQixQix")
    })

})