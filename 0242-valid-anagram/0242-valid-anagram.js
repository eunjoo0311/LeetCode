/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    const map = {}

    for(let char of s) {
        if(map[char]) {
            map[char]++
        } else {
            map[char] = 1
        }
    }

    for(let char of t) {
        if(!map[char]) return false
        map[char]--
    }

    return true
};