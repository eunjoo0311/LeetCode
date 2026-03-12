function solution(s) {
    const result = [];
    const map = {}
    
    for(let i = 0; i<s.length; i++) {
        const char = s[i]
        
        if(map[char] === undefined) {
            result.push(-1)
        } else {
            result.push(i - map[char])
        }
        map[char] = i
    }
    return result
}