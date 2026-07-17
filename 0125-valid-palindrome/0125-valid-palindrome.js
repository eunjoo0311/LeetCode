/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const string = s.toLowerCase().replaceAll(/[^a-z0-9]/g, '')

    let left = 0;
    let right = string.length - 1

    while(left < right) {
        if(string[left] !== string[right]) return false

        left++
        right--
    }

    return true
};