function solution(X, Y) {
    const countX = Array(10).fill(0)
    const countY = Array(10).fill(0)
    
    for(let x of X) {
        countX[x]++
    }
    
    for(let y of Y) {
        countY[y]++
    }
    
    let result =""
    for(let i = 9; i>=0; i--) {
        const min = Math.min(countX[i], countY[i])
        result += String(i).repeat(min)
    }
    if(result === "") return  "-1"
    if(result[0] === "0") return "0"
    
    return result
}