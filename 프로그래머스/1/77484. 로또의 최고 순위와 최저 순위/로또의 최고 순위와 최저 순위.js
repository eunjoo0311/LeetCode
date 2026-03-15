function solution(lottos, win_nums) {
    const winSet = new Set(win_nums)
    
    let zeroCount = 0;
    let matchCount = 0
    
    for(let num of lottos) {
        if(num === 0) {
            zeroCount++
        } else if (winSet.has(num)) {
            matchCount++
        }
    }
    
    const rank = (n) => {
        if(n>=2) return 7 - n
        return 6
    }
    
    const maxRank = rank(matchCount + zeroCount)
    const minRank = rank(matchCount)
    
    return [maxRank, minRank]
}