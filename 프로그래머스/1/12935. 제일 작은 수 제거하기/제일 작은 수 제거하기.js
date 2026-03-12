function solution(arr) {
    let minNum = arr[0];
    for(let i of arr) {
        minNum = Math.min(minNum, i)
    }
    if(minNum === arr[0]) {
        arr = [-1]
    }
    return arr.filter(v => v !== minNum)
}