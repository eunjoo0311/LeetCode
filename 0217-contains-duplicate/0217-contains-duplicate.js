/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort((a,b) => a-b)
    const filteredNums = nums.filter((number,i) => number === nums[i -1])

    return filteredNums.length === 0 ? false : true
};