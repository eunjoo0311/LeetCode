/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    // dfs
    // const rows = grid.length
    // const cols = grid[0].length

    // const dfs = (row, col) => {
    //     if (row < 0 || row >= rows || col < 0 || col >= cols) return 1
    //     if (grid[row][col] === 0) return 1
    //     if (grid[row][col] === -1) return 0

    //     grid[row][col] = -1

    //     return dfs(row + 1, col) + dfs(row - 1, col) + dfs(row, col + 1) + dfs(row, col - 1)
    // }

    // for (let row = 0; row < rows; row++) {
    //     for (let col = 0; col < cols; col++) {
    //         if (grid[row][col] === 1) {
    //             return dfs(row, col)
    //         }
    //     }
    // }

    // return 0

    // bfs

    const rows = grid.length
    const cols = grid[0].length

    const queue = []
    let perimeter = 0

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 1) {
                queue.push([row, col])
                grid[row][col] = -1
                break
            }
        }
    }

    while (queue.length > 0) {
        const [row, col] = queue.shift()

        if (row - 1 < 0 || grid[row - 1][col] === 0) {
            perimeter++
        } else if (grid[row - 1][col] === 1) {
            queue.push([row - 1, col])
            grid[row - 1][col] = -1
        }

        if (col + 1 >= cols || grid[row][col + 1] === 0) {
            perimeter++
        } else if (grid[row][col + 1] === 1) {
            queue.push([row, col + 1])
            grid[row][col + 1] = -1
        }

        if (col - 1 < 0 || grid[row][col - 1] === 0) {
            perimeter++
        } else if (grid[row][col - 1] === 1) {
            queue.push([row, col - 1])
            grid[row][col - 1] = -1
        }

        if (row + 1 >= rows || grid[row + 1][col] === 0) {
            perimeter++
        } else if (grid[row + 1][col] === 1) {
            queue.push([row + 1, col])
            grid[row + 1][col] = -1
        }
    }
    return perimeter
};