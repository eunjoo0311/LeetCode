/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const map = {}

    for(let num of nums) {
        map[num] = (map[num] || 0) + 1
    }
    
    let index = 0;

    for(let i = 0; i <= 2; i++) {
        for(let j = 0; j < map[i]; j++) {
            nums[index] = i
            index++
        }
    }
};