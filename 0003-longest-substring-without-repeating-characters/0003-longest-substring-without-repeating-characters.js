/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const set = new Set()
    let answer = 0;
    let left = 0;

    for(let right = 0; right < s.length; right++) {
        while(set.has(s[right])) {
            set.delete(s[left])
            left++
        }
        set.add(s[right])
        answer = Math.max(answer, right - left + 1)
    }
    return answer
};