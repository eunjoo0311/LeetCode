/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    // intervals 정렬
    intervals.push(newInterval)
    intervals.sort((a,b) => a[0]- b[0])

    const answer = []

    for(let interval of intervals) {
        const curStart = interval[0]
        const curEnd= interval[1]

        if(answer.length === 0) {
            answer.push(interval)
            continue
        }

        const last = answer[answer.length - 1]
        const lastEnd = last[1]

        if(lastEnd >= curStart) {
            last[1] = Math.max(lastEnd, curEnd)
        } else {
            answer.push(interval)
        }
    }
    return answer
};