/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = {}

  for(let i = 0; i < nums.length; i++) {
    const need= target - nums[i]
    if(map[need] === undefined) {
        map[nums[i]] = i
    } else {
        return [map[need], i]
    }
  } 
};