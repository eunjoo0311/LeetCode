/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    // dfs
    const rows = grid.length
    const cols = grid[0].length

    const dfs = (row, col) => {
        if (row < 0 || row >= rows || col < 0 || col >= cols) return 1
        if (grid[row][col] === 0) return 1
        if (grid[row][col] === -1) return 0
        grid[row][col] = -1

        return dfs(row + 1, col) + dfs(row - 1, col) + dfs(row, col + 1) +
            dfs(row, col - 1)
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 1) {
                return dfs(row, col)
            }
        }
    }
};