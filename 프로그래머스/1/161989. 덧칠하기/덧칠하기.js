function solution(n, m, section) {
    let count = 0;
    let draw = 0
    for(let i of section) {
        if(i > draw) {
            count++
            draw = i + m -1
        }
    }
    return count;
}