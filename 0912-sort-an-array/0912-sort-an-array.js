/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    if (nums.length <= 1) return nums;

    const mid = nums.length / 2

    const left = sortArray(nums.slice(0, mid))
    const right = sortArray(nums.slice(mid))

    return merge(left, right)
};

function merge(left, right) {
    const result = []

    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++
        } else {
            result.push(right[rightIndex])
            rightIndex++
        }
    }

    while (leftIndex < left.length) {
        result.push(left[leftIndex])
        leftIndex++
    }

    while (rightIndex < right.length) {
        result.push(right[rightIndex])
        rightIndex++
    }

    return result
}