/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const answer = []

    let i = 0

    while(i < intervals.length && intervals[i][1] < newInterval[0]) {
        answer.push(intervals[i])
        i++
    }

    while(i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0])
        newInterval[1] = Math.max(newInterval[1], intervals[i][1])
        i++
    }
    answer.push(newInterval)

    while(i < intervals.length) {
        answer.push(intervals[i])
        i++
    }
    return answer
};