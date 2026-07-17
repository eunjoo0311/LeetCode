/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set  = new Set(nums)
    let result = 0

    for(let num of set) {
        if(set.has(num - 1)) continue

        let cur = num
        let count = 1;

        while(set.has(cur + 1)) {
            cur++
            count++
        }

        result = Math.max(count, result)
    }

    return result
};