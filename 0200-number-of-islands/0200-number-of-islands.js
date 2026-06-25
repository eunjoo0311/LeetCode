/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let count = 0

    const rows = grid.length
    const cols = grid[0].length
    const dfs = (row, col) => {
        if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === '0') return false

        grid[row][col] = '0'

        dfs(row + 1, col)
        dfs(row - 1, col)
        dfs(row, col + 1)
        dfs(row, col - 1)
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === '1') {
                count++
                dfs(row, col)
            }
        }
    }

    return count
};