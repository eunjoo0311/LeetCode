/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const map = {}

    let sum = 0
    let answer = 0;

    for(let num of nums) {
        sum += num

        if(sum === k) {
            answer++
        }

        if(map[sum - k ]) {
            answer += map[sum - k]
        }

        map[sum] = (map[sum] || 0) + 1
    }
    return answer
};