/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    // 1 이하일경우 return
    if (nums.length <= 1) return nums

    const mid = Math.floor(nums.length / 2)

    const left = sortArray(nums.slice(0, mid))
    const right = sortArray(nums.slice(mid))

    return merge(left, right)
};

function merge(left, right) {
    const answer = []

    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            answer.push(left[i])
            i++
        } else {
            answer.push(right[j])
            j++
        }
    }

    while (i < left.length) {
        answer.push(left[i])
        i++
    }

    while(j < right.length) {
        answer.push(right[j])
        j++
    }
    return answer
}