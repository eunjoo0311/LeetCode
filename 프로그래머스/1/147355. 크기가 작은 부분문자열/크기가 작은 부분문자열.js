function solution(t, p) {
    let count = 0;
    const len = p.length;
    
    for(let i = 0; i<=t.length - len; i++) {
        const part = t.slice(i, i+len)
        if(part <= p) {
            count++
        }
    }
    return count
}