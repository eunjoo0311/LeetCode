function solution(number, limit, power) {
    let total = 0;
    
    for(let i = 1; i<=number; i++) {
        let count = 0;
        for(let j = 1; j * j <= i; j++) {
            if(i % j === 0) {
                if(j * j === i) {
                    count++
                } else {
                    count += 2
                }
            }
        }
        total += count > limit ? power : count
    }
    return total
}