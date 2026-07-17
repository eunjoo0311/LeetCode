/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {}

    for(let num of nums) {
        map[num] = (map[num] || 0) + 1
    }

    return Object.entries(map).sort((a,b) => b[1] - a[1]).slice(0, k).map(item => Number(item[0]))
};