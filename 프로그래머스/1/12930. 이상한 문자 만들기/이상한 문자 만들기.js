function solution(s) {
    let idx = 0;
    let result = "";
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === " ") {
            result += " "
            idx = 0
        }
        else {
            if(idx % 2 !== 0) {
                result += s[i].toLowerCase()
            } else {
                result += s[i].toUpperCase()
            }
            idx++
        }
    }
    return result
}