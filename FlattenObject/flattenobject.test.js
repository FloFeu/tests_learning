const flattenObject = require('./flattenobject')

describe('Flatten Object Unit Tests Suite', () => {

    it('should return an empty object', () => {
        expect(flattenObject({})).toMatchObject({})
    })

    it('should return an object with 1 value', () => {
        
        expect(flattenObject({a: 1})).toMatchObject({a: 1})
    })
})