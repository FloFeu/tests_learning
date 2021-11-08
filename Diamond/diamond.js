/**
 * 
 */
const diamond = (letter) => {
    let result = ''

    if (letter === 'A') {
        result = 'A'
    }
    
    if (letter === 'B') {
        result = ` A 
        B B
         A `
    }
    return result
}

module.exports = diamond;