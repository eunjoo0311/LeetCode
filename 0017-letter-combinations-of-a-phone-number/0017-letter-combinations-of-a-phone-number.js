/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }

    const answer = []

    const dfs = (index, path) => {
        if(index === digits.length) {
            return answer.push(path)
        }

        const letters = map[digits[index]]

        for(const letter of letters) {
            dfs(index + 1, path + letter)
        }
    }

    dfs(0, '')
    return answer
};