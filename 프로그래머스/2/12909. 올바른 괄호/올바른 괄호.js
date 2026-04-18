function solution(s){
    if(s.length % 2 !== 0) return false;
    
    const stack = []
    
    for(let i of s) {
        if(i === '(') {
            stack.push(i)
        } else if(i ===')') {
            if(stack.length === 0) {
                return false
            }
            stack.pop()
        }
    }
    
    return stack.length === 0
}