/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const answer = []

    const dfs = (start, path, sum) => {
        if(sum === target) {
            return answer.push([...path])
        }
        if(sum > target) {
            return 
        }

        for(let i = start; i < candidates.length; i++) {
            path.push(candidates[i])
            dfs(i, path, sum + candidates[i])
            path.pop()
        }

    }

    dfs(0, [], 0)

    return answer
};