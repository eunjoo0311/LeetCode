/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[1] - b[1])

    let count = 0
    let prevEnd = intervals[0][1]
    
    for(let i = 1; i < intervals.length; i++) {
        let curStart = intervals[i][0]
        let curEnd = intervals[i][1]

        if(prevEnd > curStart) {
            count++
        } else {
            prevEnd = curEnd
        }
    }

    return count
};