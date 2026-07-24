/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0;
    let right = x

    while(left <= right) {
        const mid = Math.floor((left + right) / 2)
        const square = mid * mid
        if(square === x) {
            return mid
        } else if(square < x) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return right
};