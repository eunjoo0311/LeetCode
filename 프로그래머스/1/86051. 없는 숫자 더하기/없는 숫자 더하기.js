function solution(numbers) {
    let setNumbers = [...new Set(numbers)]
    let sum = 0;
    for(let n of setNumbers) {
        sum+= n
    }
    return 45 - sum;
}