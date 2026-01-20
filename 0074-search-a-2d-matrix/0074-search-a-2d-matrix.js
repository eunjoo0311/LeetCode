/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const m = matrix.length;
    if (m === 0) return false;
    const n = matrix[0].length;
    if (n === 0) return false;

    let left = 0;
    let right = m * n - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        const r = Math.floor(mid / n)
        const c = mid % n;
        const value = matrix[r][c]

        if (value === target) return true;
        if (value < target) left = mid + 1
        else right = mid - 1
    }

    return false;
};