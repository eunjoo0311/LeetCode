/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false

    const map = {}

    for(let char of s) {
        map[char] = (map[char] || 0) + 1
    }

    for(let char of t) {
        if(map[char] === undefined) return false

        map[char]--
        if(map[char] === 0) {
            delete map[char]
        }
    }
    return true
};