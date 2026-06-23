/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // 가장 멀리 갈 수 있는 곳 
    let maxReach = nums[0]

    for(let i = 1; i < nums.length; i++) {
        if(i > maxReach) {
            return false
        }
        maxReach = Math.max(maxReach, nums[i] + i)

        if(maxReach >= nums.length - 1) {
            return true
        }
    }

    return true
};