function solution(s) {
    let result = 0;
    let x = ""
    let xCount = 0;
    let diffCount = 0;
    
    for(let i = 0; i<s.length; i++) {
        if(x === "") {
            x = s[i]
        }
        
        if(x === s[i]) {
            xCount++
        } else {
            diffCount++
        }
        
        if(xCount === diffCount) {
            result++
            x = ""
            xCount = 0
            diffCount = 0
        }
    }
    if(xCount !== diffCount) result++
    
    return result
}