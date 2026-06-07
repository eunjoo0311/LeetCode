/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const letters = s.toLowerCase().replaceAll(/[^a-z0-9]/g, '')

    for(let i = 0; i<letters.length / 2; i++) {
        if(letters[i] !== letters[letters.length - 1 - i]) {
            return false
        }
    }
    return true
};