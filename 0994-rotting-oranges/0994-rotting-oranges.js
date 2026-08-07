/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    // const rows = grid.length
    // const cols = grid[0].length

    // const queue = []
    // let fresh = 0;
    // let minutes = 0

    // for (let row = 0; row < rows; row++) {
    //     for (let col = 0; col < cols; col++) {
    //         if (grid[row][col] === 2) {
    //             queue.push([row, col])
    //         }
    //         else if (grid[row][col] === 1) {
    //             fresh++
    //         }
    //     }
    // }

    // while (queue.length > 0 && fresh > 0) {
    //     const size = queue.length

    //     for (let i = 0; i < size; i++) {
    //         const [row, col] = queue.shift()

    //         if (row - 1 >= 0 && grid[row - 1][col] === 1) {
    //             grid[row - 1][col] = 2
    //             queue.push([row - 1, col])
    //             fresh--
    //         }

    //         if (row + 1 < rows && grid[row + 1][col] === 1) {
    //             grid[row + 1][col] = 2
    //             queue.push([row + 1, col])
    //             fresh--
    //         }

    //         if (col - 1 >= 0 && grid[row][col - 1] === 1) {
    //             grid[row][col - 1] = 2
    //             queue.push([row, col - 1])
    //             fresh--
    //         }

    //         if (col + 1 < cols && grid[row][col + 1] === 1) {
    //             grid[row][col + 1] = 2
    //             queue.push([row, col + 1])
    //             fresh--
    //         }
    //     }
    //     minutes++
    // }
    // return fresh === 0 ? minutes : -1

    const rows = grid.length
    const cols = grid[0].length

    const times = Array.from({ length: rows }, () => Array(cols).fill(Infinity))
    const dfs = (row, col, time) => {
        if (row < 0 || row >= rows || col < 0 || col >= cols) return
        if (grid[row][col] !== 1) return

        if (times[row][col] <= time) return

        times[row][col] = time

        dfs(row + 1, col, time + 1)
        dfs(row - 1, col, time + 1)
        dfs(row, col + 1, time + 1)
        dfs(row, col - 1, time + 1)

    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 2) {
                dfs(row - 1, col, 1)
                dfs(row + 1, col, 1)
                dfs(row, col - 1, 1)
                dfs(row, col + 1, 1)
            }
        }
    }

    let answer = 0

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 1) {
                if (times[row][col] === Infinity) {
                    return -1
                }
                answer = Math.max(answer, times[row][col])
            }
        }
    }

    return answer
};