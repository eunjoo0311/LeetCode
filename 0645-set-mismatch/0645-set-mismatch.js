/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    const set = new Set()

    let duplicate = 0
    for (const num of nums) {
        if (set.has(num)) {
            duplicate = num
        }
        set.add(num)
    }
    let missing = 0

    for(let i = 1; i <= nums.length; i++) {
        if(!set.has(i)) {
            missing = i
            break
        }
    }
    return [duplicate, missing]
};