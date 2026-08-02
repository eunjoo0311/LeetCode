/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b) => a-b)
    
    const answer = []

    const dfs = (start, path, sum) => {
        if(sum === target) {
            return answer.push([...path])
        }
        if(sum > target) {
            return
        }

        for(let i = start; i < candidates.length; i++) {
            if(i > start && candidates[i] === candidates[i - 1]) continue


            path.push(candidates[i])
            dfs(i + 1, path, sum + candidates[i])
            path.pop()
        }
    }

    dfs(0, [], 0)
    return answer 
};