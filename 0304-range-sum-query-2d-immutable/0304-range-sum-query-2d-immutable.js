/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    const rows = matrix.length
    const cols = matrix[0].length

    this.prefix = Array.from({length : rows + 1}, () => new Array(cols + 1).fill(0))

    for(let row = 1; row <= rows; row++) {
        for(let col = 1; col <= cols; col++) {
            this.prefix[row][col] = matrix[row - 1][col - 1] + this.prefix[row - 1][col] + this.prefix[row][col - 1] - this.prefix[row - 1][col - 1]
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return (
        this.prefix[row2 + 1][col2 + 1] - this.prefix[row1][col2 + 1] - this.prefix[row2 + 1][col1] + this.prefix[row1][col1]
    )
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */