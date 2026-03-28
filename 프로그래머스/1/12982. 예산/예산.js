function solution(d, budget) {
   d.sort((a,b) => a-b)
    
    let sum = 0;
    let count = 0;
    
    for(let i of d) {
        sum += i
        if(sum <= budget) {
            console.log(sum)
            count++
        }
    }
    return count
}