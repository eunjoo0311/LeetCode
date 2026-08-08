/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])

    const answer = []

    for (const interval of intervals) {
        if (answer.length === 0) {
            answer.push(interval)
        }

        const last = answer[answer.length - 1]

        if(last[1] >= interval[0]) {
            last[1] = Math.max(interval[1], last[1])
        } else {
            answer.push(interval)
        }
    }

    return answer
};