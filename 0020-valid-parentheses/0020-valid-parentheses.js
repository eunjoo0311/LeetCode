/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const answer = []
    for (const x of s) {
        if (x === "(" || x === "[" || x === "{") {
            answer.push(x)
        } else {
            const lastChar = answer.pop()
            if ((x === ")" && lastChar !== "(") ||
                (x === "}" && lastChar !== "{") ||
                (x === "]" && lastChar !== "[")
            ) {
                return false
            }
        }
    }
    return answer.length === 0
};