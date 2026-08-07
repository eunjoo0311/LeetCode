/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    // const rows = board.length
    // const cols = board[0].length

    // const dfs = (row, col) => {
    //     if (row < 0 || row >= rows || col < 0 || col >= cols) return
    //     if (board[row][col] !== 'O') return
    //     board[row][col] = '#'

    //     dfs(row + 1, col)
    //     dfs(row - 1, col)
    //     dfs(row, col + 1)
    //     dfs(row, col - 1)
    // }

    // for (let row = 0; row < rows; row++) {
    //     dfs(row, 0)
    //     dfs(row, cols - 1)
    // }

    // for (let col = 0; col < cols; col++) {
    //     dfs(0, col)
    //     dfs(rows - 1, col)
    // }

    // for (let row = 0; row < rows; row++) {
    //     for (let col = 0; col < cols; col++) {
    //         if (board[row][col] === 'O') {
    //             board[row][col] = 'X'
    //         } else if (board[row][col] === '#') {
    //             board[row][col] = 'O'
    //         }
    //     }
    // }

    const rows = board.length
    const cols = board[0].length

    const bfs = (startRow, startCol) => {
        if (board[startRow][startCol] !== 'O') return
        const queue = [[startRow, startCol]]
        board[startRow][startCol] = '#'

        while (queue.length > 0) {
            const [row, col] = queue.shift()

            if (row - 1 >= 0 && board[row - 1][col] === 'O') {
                board[row - 1][col] = '#'
                queue.push([row - 1, col])
            }

            if (row + 1 < rows && board[row + 1][col] === 'O') {
                board[row + 1][col] = '#'
                queue.push([row + 1, col])
            }

            if (col - 1 >= 0 && board[row][col - 1] === 'O') {
                board[row][col - 1] = '#'
                queue.push([row, col - 1])
            }


            if (col + 1 < cols && board[row][col + 1] === 'O') {
                board[row][col + 1] = '#'
                queue.push([row, col + 1])
            }
        }

    }

    for (let row = 0; row < rows; row++) {
        bfs(row, 0)
        bfs(row, cols - 1)
    }

    for (let col = 0; col < cols; col++) {
        bfs(0, col)
        bfs(rows - 1, col)
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (board[row][col] === 'O') {
                board[row][col] = 'X'
            } else if (board[row][col] === '#') {
                board[row][col] = 'O'
            }
        }
    }
};