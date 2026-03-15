function solution(s, skip, index) {
    let result = ""
    
    for(let char of s) {
        let count = 0;
        let current = char.charCodeAt(0);
        
        while(count < index) {
            current++;
            if(current > "z".charCodeAt(0)) {
                current = "a".charCodeAt(0)
            }
            
            const nextChar = String.fromCharCode(current);
            
            if(!skip.includes(nextChar)) {
                count++;
            }
        }
        result += String.fromCharCode(current)
    }
    return result;
}