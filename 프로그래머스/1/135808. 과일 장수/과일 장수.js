function solution(k, m, score) {
    score.sort((a,b) => b-a)
    
    let price = 0;
    for(let i = m-1; i<score.length; i+=m) {
        price += score[i] * m
    }
    return price
}