/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const answer = []

    const dfs = (start, path, sum) => {
        if(sum === target) {
            answer.push([...path])
            return
        }

        if(sum > target) {
            return
        }

        for(let i = start; i < candidates.length; i++) {
            path.push(candidates[i])
            dfs(i, path, candidates[i] + sum)
            path.pop()
        }
    }

    dfs(0, [], 0)
    return answer
};