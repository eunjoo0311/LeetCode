/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    const rows = grid.length
    const cols = grid[0].length

    const dfs = (row, col) => {
        if (row < 0 || row >= rows || col < 0 || col >= cols) return 0
        if (grid[row][col] !== 1) return 0

        grid[row][col] = 0

        return dfs(row - 1, col) + dfs(row + 1, col) + dfs(row, col - 1) + dfs(row, col + 1) + 1
    }

    let answer = 0

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 1) {
                answer = Math.max(answer, dfs(row, col))
            }
        }
    }

    return answer
};