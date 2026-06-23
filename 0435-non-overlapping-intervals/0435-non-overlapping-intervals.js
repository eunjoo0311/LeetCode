/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    // 빨리 끝나는 지점 기준으로 정렬
    intervals.sort((a,b) => a[1] - b[1])

    // count 변수랑, 전꺼의 끝값 저장할 변수
    let count = 0;
    let prevEnd = intervals[0][1]

    for(let i = 1; i < intervals.length; i++) {
        const curStart = intervals[i][0]
        const curEnd = intervals[i][1]

        if(curStart < prevEnd) {
            count++
        } else {
            prevEnd = curEnd
        }
    }

    return count

};