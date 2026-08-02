/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const answer = []

    const dfs = (start, path) => {
        if(path.length === k) {
            return answer.push([...path])
        }

        for(let i = start; i <= n; i++) {
            path.push(i)
            dfs(i + 1, path)
            path.pop()
        }
    }

    dfs(1, [])
    return answer
};