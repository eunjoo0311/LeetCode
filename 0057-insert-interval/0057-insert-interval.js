/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    // 담아둘 배열, index, 마지막 값 잡기
    const answer = []
    let i = 0;
    let n = intervals.length

    // 합치기 전 배열 푸시하기
    while(i < n && intervals[i][1] < newInterval[0]) {
        answer.push(intervals[i])
        i++
    }
    // 겹치기 
    while(i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0])
        newInterval[1] = Math.max(newInterval[1], intervals[i][1])
        i++
    }
    answer.push(newInterval)

    // 후 부분 배열 푸시하기
    while(i < n) {
        answer.push(intervals[i])
        i++
    }

    return answer
};