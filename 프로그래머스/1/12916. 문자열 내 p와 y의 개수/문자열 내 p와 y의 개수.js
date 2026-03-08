function solution(s){
    var answer = true;
    let pCount = 0;
    let yCount = 0;
    
    for(let n of s) {
        if(n.toLowerCase() === 'p') {
            pCount++
        } else if(n.toLowerCase() === 'y') {
            yCount++
        }
    }
    if(pCount === yCount) {
        return true
    } else {
        return false
    }
}