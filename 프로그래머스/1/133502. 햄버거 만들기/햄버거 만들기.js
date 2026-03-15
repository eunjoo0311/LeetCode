function solution(ingredient) {
    const rule = [1,2,3,1]
    const stack = []
    let count = 0;
    
    for(let i of ingredient) {
        stack.push(i)
        const last = stack.slice(-4)
        if(last.join("") === rule.join("")) {
            stack.pop()
            stack.pop()
            stack.pop()
            stack.pop()
            count++
        }
    }
    return count;
}