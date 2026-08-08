/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const answer = []

    let i = 0
    let n = intervals.length

    while(i < n && intervals[i][1] < newInterval[0]) {
        answer.push(intervals[i])
        i++
    }

    while(i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(intervals[i][0], newInterval[0])
        newInterval[1] = Math.max(intervals[i][1], newInterval[1])
        i++
    }
    answer.push(newInterval)

    while(i < n) {
        answer.push(intervals[i])
        i++
    }

    return answer
};