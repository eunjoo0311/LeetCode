function solution(x) {
    let sum = 0;
    for(let i of [...x.toString()]) {
        sum += Number(i)
    }
    return x % sum === 0 ? true : false;
}