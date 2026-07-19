/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    const stack = []

    for (let operation of operations) {
        if (operation === 'C') {
            stack.pop()
        }
        else if (operation === 'D') {
            stack.push(stack[stack.length - 1] * 2)
        }
        else if (operation === '+') {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2])
        }
        else {
            stack.push(Number(operation))
        }
    }

    return stack.reduce((sum, cur) => sum + cur, 0)
};