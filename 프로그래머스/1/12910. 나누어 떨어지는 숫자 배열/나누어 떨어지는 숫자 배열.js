function solution(arr, divisor) {
    let newArr = [];
    
    for(let n of arr) {
        if(n % divisor === 0) {
            newArr.push(n)
        }
    }
    return newArr.length !== 0 ? newArr.sort((a,b) => a-b): [-1];
}