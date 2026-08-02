/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
    const wordSet = new Set(dictionary)
    const dp = new Array(s.length + 1).fill(0)

    for(let i = 1; i <= s.length; i++) {
        dp[i] = dp[i - 1] + 1

        for(let j = 0; j < i; j++) {
            const word = s.slice(j, i)

            if(wordSet.has(word)) {
                dp[i] = Math.min(dp[i], dp[j])
            }
        }
    }

    return dp[s.length]
};