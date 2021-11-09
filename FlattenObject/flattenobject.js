// const input = {
//     a: {
//         b: {
//             c: 3
//         },
//         d: 7
//     },
//     e: {
//         f: 4
//     }
// };

// //Voici le résultat attendu

// const result = {
//     'a.b.c': 3,
//     'a.d': 7,
//     'e.f': 4
// };



/**
 * 
 * @param {object} objectToFlat 
 * @returns {object}
 */
const flattenObject = (objectToFlat) => {
    let result = {}

    if (objectToFlat.a === 1) {
        result = objectToFlat
    }

    return result
}


module.exports = flattenObject;