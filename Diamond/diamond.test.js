const diamond = require('./diamond.js')

describe('Diamond Unit Test Suites', () => {
    it('should return nothing', () => {
        expect(diamond()).toBe('')
    })

    it('should display a one line diamond with letter A', () => {
        expect(diamond('A')).toBe('A')
    })

    it('should display a diamond from letter B', () => {
        expect(diamond('B')).toBe(` A \nB B\n A `)
    })
})