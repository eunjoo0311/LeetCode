/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const map = {}

    let left = 0
    let maxCount = 0;
    let answer = 0

    for(let right = 0; right < s.length; right++) {
        map[s[right]] = (map[s[right]] || 0) + 1
        maxCount = Math.max(maxCount, map[s[right]])

        while(right - left + 1 - maxCount > k) {
            map[s[left]]--
            left++
        }
        answer = Math.max(answer, right- left + 1)
    }
    return  answer
};