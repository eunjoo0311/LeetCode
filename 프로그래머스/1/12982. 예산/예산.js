function solution(d, budget) {
    let price = 0;
    let count = 0;
    
   d.sort((a,b) => a-b)
    for (let i of d) {
        if(budget - price >= i) {
            price += i
            count ++
        }
    }
    return count
}