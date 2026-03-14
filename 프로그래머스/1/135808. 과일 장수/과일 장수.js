function solution(k, m, score) {
    score.sort((a,b) => b-a)
    score.splice(score.length - score.length % m)
    let price = 0;
    const row = []
    for(let i = 0; i<score.length; i++) {
        if(i % m === 0) {
          row.push(score.slice(i,i+m))
        }
    }
    for(let i = 0; i<row.length; i++) {
        price += Math.min(k, ...row[i]) * m
    }
    return price
}