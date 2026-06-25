/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    const rows = heights.length
    const cols = heights[0].length

    const pacific = Array.from({ length: rows }, () => Array(cols).fill(false))
    const atlantic = Array.from({ length: rows }, () => Array(cols).fill(false))

    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ]

    const dfs = (row, col, visited) => {
        visited[row][col] = true

        for (let[dr, dc] of directions) {
            const nextRow = row + dr
            const nextCol = col + dc

            if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= cols) {
                continue
            }

            if (visited[nextRow][nextCol]) {
                continue
            }

            if (heights[nextRow][nextCol] < heights[row][col]) {
                continue
            }

            dfs(nextRow, nextCol, visited)
        }
    }

    for (let row = 0; row < rows; row++) {
        dfs(row, 0, pacific)
        dfs(row, cols - 1, atlantic)
    }

    for (let col = 0; col < cols; col++) {
        dfs(0, col, pacific)
        dfs(rows - 1, col, atlantic)
    }

    const answer = []

    for(let row = 0; row < rows;  row++) {
        for(let col = 0; col < cols; col++) {
            if(pacific[row][col] && atlantic[row][col]) {
                answer.push([row, col])
            }
        }
    }
    return answer
};