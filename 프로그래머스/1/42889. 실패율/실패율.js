function solution(N, stages) {
    const map = {}
    for(let i =0; i<stages.length; i++) {
        if(map[stages[i]] === undefined) {
            map[stages[i]] = 1
        } else {
            map[stages[i]]++
        }
    }
    
    const result = []
    let challenger = stages.length;
    
    for(let i= 1; i<=N; i++){
        const fail = map[i] || 0
        const rate = challenger === 0 ? 0 : fail / challenger
        
        result.push([i, rate])
        challenger -= fail
    }
    
    return result.sort((a,b) => b[1] - a[1]).map(v=>v[0])
}