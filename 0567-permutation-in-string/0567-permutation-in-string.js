/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false

    const map = {}

    for (let char of s1) {
        map[char] = (map[char] || 0) + 1
    }

    const window = {}
    let left = 0;

    for (let right = 0; right < s2.length; right++) {
        window[s2[right]] = (window[s2[right]] || 0) + 1

        if (right - left + 1 > s1.length) {
            window[s2[left]]--
            if (window[s2[left]] === 0) {
                delete window[s2[left]]
            }
            left++
        }

        if (right - left + 1 === s1.length) {
            let isSame = true
            for (const char in map) {
                if (map[char] !== window[char]) {
                    isSame = false
                }
            }
            if (isSame) return true
        }
    }

    return false
};