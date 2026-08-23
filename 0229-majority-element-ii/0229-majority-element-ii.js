/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const map = {}
    const result = []

    for(let num of nums) {
        map[num] = (map[num] || 0) + 1
    }

    for(let num in map) {
        if(map[num] > nums.length / 3) {
            result.push(Number(num))
        }
    }

    return result
};