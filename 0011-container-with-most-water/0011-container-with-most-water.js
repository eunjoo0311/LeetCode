/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1
    let answer = 0
    while(left < right) {
        const h = Math.min(height[left], height[right])
        const w = right- left

        answer = Math.max(answer, h * w)

        if(height[left]< height[right]) {
            left++
        } else {
            right--
        }
    }
    return answer
};