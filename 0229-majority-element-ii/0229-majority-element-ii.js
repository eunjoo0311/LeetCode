/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const map = {}
    const answer = []

    for(const num of nums) {
        map[num] = (map[num] || 0) + 1
    }

    for(const num in map) {
        if(map[num] > nums.length / 3) {
            answer.push(Number(num))
        }
    }

    return answer
};