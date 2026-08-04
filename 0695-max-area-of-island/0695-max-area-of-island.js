/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    // dfs
    // const rows = grid.length
    // const cols = grid[0].length

    // let area = 0

    // const dfs = (row, col) => {
    //     if (row < 0 || row >= rows || col < 0 || col >= cols) return 0
    //     if (grid[row][col] === 0) return 0

    //     grid[row][col] = 0

    //     return dfs(row + 1, col) + dfs(row - 1, col) + dfs(row, col + 1) + dfs(row, col - 1) + 1
    // }

    // for (let row = 0; row < rows; row++) {
    //     for (let col = 0; col < cols; col++) {
    //         if (grid[row][col] === 1) {
    //             area = Math.max(area, dfs(row, col))
    //         }
    //     }
    // }

    // return area

    // bfs

    const rows = grid.length
    const cols = grid[0].length

    let area = 0

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 1) {
                const queue = [[row, col]]

                grid[row][col] = 0
                let count = 1

                while (queue.length > 0) {
                    const [currentRow, currentCol] = queue.shift()
                    if (currentRow - 1 >= 0 && grid[currentRow - 1][currentCol] === 1) {
                        count++
                        grid[currentRow - 1][currentCol] = 0
                        queue.push([currentRow - 1, currentCol])
                    }

                    if (currentRow + 1 < rows && grid[currentRow + 1][currentCol] === 1) {
                        count++
                        grid[currentRow + 1][currentCol] = 0
                        queue.push([currentRow + 1, currentCol])
                    }


                    if (currentCol - 1 >= 0 && grid[currentRow][currentCol - 1] === 1) {
                        count++
                        grid[currentRow][currentCol - 1] = 0
                        queue.push([currentRow, currentCol - 1])
                    }

                    if (currentCol + 1 < cols && grid[currentRow][currentCol + 1] === 1) {
                        count++
                        grid[currentRow][currentCol + 1] = 0
                        queue.push([currentRow, currentCol + 1])
                    }
                }

                area = Math.max(area, count)
            }
        }
    }

    return area
};
