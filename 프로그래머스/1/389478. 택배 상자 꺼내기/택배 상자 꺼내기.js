function solution(n, w, num) {
    const row = Math.ceil(num / w)
    const totalRows = Math.ceil(n / w)
    
    let col;
    if(row % 2 === 1) {
        col = (num - 1) % w + 1
    } else {
        col = w - ((num - 1) % w)
    }
    
    let answer = 1
    
    for(let i = row + 1; i<=totalRows; i++) {
        let boxNum;
        if(i % 2 === 1) {
            boxNum = (i - 1) * w + col
        } else {
            boxNum = i * w - col + 1;
        }
        if(boxNum <=n) {
            answer++
        }
    }
    
    return answer
}