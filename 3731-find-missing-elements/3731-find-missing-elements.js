/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    const set = new Set(nums)

    const min = Math.min(...nums)
    const max = Math.max(...nums)

    const answer = []

    for(let i = min; i <= max; i++) {
        if(!set.has(i)) {
            answer.push(i)
        }
    }

    return answer
};