/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = []

    for (let char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char)
        } else {
            const lastChar = stack.pop()
            if (
                (char === ')' && lastChar !== '(')
                || (char === ']' && lastChar !== '[')
                || (char === '}' && lastChar !== '{')) return false
        }

    }
    return stack.length === 0

};