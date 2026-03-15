function solution(dartResult) {
    const scores =[]
    let i = 0
    
    while(i < dartResult.length) {
        let num;
        
        if(dartResult[i] ==="1" && dartResult[i + 1] === "0") {
            num = 10
            i+= 2
        } else {
            num = Number(dartResult[i])
            i++
        }
        
        const bonus = dartResult[i]
        
        if(bonus === "S") num = num ** 1
        if(bonus === "D") num = num ** 2
        if(bonus === "T") num = num ** 3
        
        i++;
        
        if(dartResult[i] === "*") {
            num *= 2;
            if(scores.length) scores[scores.length -1] *= 2;
            i++
        } else if(dartResult[i] === "#") {
            num *= -1;
            i++
        }
        scores.push(num)
    }
    return scores.reduce((a,b) => a +b , 0)
}