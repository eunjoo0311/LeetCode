/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // 현재꺼 새로 할거냐, 더해서 쓸거냐
    let curSum = nums[0]
    let maxSum = nums[0]

    for(let i = 1; i < nums.length; i++) {
        curSum = Math.max(curSum + nums[i], nums[i])
        maxSum = Math.max(curSum, maxSum)
    }

    return maxSum
};