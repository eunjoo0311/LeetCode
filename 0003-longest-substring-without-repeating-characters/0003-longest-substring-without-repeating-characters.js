/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const map = new Map();
    let left = 0;
    let max = 0;

    for (let right = 0; right < s.length; right++) {
        const ch = s[right];

        if (map.has(ch) && map.get(ch) >= left) {
            left = map.get(ch) + 1;
        }

        map.set(ch, right);
        max = Math.max(max, right - left + 1);
    }

    return max;
};