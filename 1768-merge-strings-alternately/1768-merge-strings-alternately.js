/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let answer = ''
    const maxLength = Math.max(word1.length, word2.length)

    for (let i = 0; i < maxLength; i++) {
        if (i < word1.length) {
            answer += word1[i]
        }

        if (i < word2.length) {
            answer += word2[i]
        }
    }
    return answer
};