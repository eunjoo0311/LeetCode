/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const answer = []
    const used = new Array(nums.length).fill(false)

    const dfs = (path) => {
        if(nums.length === path.length) {
            return answer.push([...path])
        }

        for(let i = 0; i < nums.length; i++) {
            if(used[i]) continue

            used[i] = true
            path.push(nums[i])
            dfs(path)
            path.pop()
            used[i] = false
        }
    }
    dfs([])
    return answer
};