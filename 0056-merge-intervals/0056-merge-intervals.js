/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    const answer = []

    // for문으로 순회
    // 현재 값 시작과 끝 지정
    // if문으로 첫번째는 그냥 푸시하기
    // 마지막 값 가져오기
    // 비교해서 합치거나 아니라면 푸시하기

    for (let interval of intervals) {
        const curStart = interval[0]
        const curEnd = interval[1]

        if (answer.length === 0) {
            answer.push(interval)
            continue
        }

        const last = answer[answer.length - 1]
        const lastEnd = last[1]

        if (lastEnd >= curStart) {
            last[1] = Math.max(lastEnd, curEnd)
        } else {
            answer.push(interval)
        }
    }

    return answer
};