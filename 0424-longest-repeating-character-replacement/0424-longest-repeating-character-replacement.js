/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    const count = {}

    let left = 0;
    let maxCount = 0;
    let answer = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right]
        count[char] = (count[char] || 0) + 1

        maxCount = Math.max(maxCount, count[char])

        while ((right - left + 1) - maxCount > k) {
            count[s[left]]--
            left++
        }
        answer = Math.max(answer, right - left + 1)
    }
    return answer
};