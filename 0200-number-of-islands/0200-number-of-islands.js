/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // dfs
    const rows = grid.length
    const cols = grid[0].length

    let count = 0

    const dfs = (row, col) => {
        if(row < 0 || row >= rows || col < 0 || col >= cols) return
        if(grid[row][col] === '0') return

        grid[row][col] = '0'

        dfs(row + 1, col)
        dfs(row - 1, col)
        dfs(row, col + 1)
        dfs(row, col - 1)
    }

    for(let row = 0; row < rows; row++) {
        for(let col = 0; col < cols; col++) {
            if(grid[row][col] === '1') {
                count++
                dfs(row, col)
            }
        }
    }

    return count
};