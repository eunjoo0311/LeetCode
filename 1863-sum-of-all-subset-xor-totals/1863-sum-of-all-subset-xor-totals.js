/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let answer = 0

    function dfs(index, xorValue) {
        if(index === nums.length) {
            return answer += xorValue
        }

        dfs(index + 1, xorValue)
        dfs(index + 1, xorValue ^ nums[index])
    }

    dfs(0,0)
    return answer
};