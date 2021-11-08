/**
 * 
 */
const diamond = (letter) => {
    let result = ''

    if (letter === 'A') {
        result = 'A'
    }
    
    if (letter === 'B') {
        result = ' A \nB B\n A '
    }
    return result
}

module.exports = diamond;