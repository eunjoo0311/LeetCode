function solution(a, b) {
    let sum = 0;
    let minNum = Math.min(a,b)
    let maxNum = Math.max(a,b)
    for(let i = minNum; i<=maxNum; i++) {
        sum +=i
    }
    return sum;
}