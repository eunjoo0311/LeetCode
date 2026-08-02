/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const answer = []

    const dfs = (path, open, close) => {
        if (path.length === n * 2) {
            return answer.push(path)
        }

        if (open < n) {
            dfs(path + '(', open + 1, close)
        }

        if (close < open) {
            dfs(path + ')', open, close + 1)
        }
    }

    dfs('', 0, 0)
    return answer
};