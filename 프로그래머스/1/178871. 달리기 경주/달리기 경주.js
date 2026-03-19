function solution(players, callings) {
    const rank = {};
    
    for(let i = 0; i<players.length; i++) {
        rank[players[i]] = i
    }
    
    for(let name of callings) {
        const currentIdx = rank[name]
        const frontIdx = currentIdx - 1
        const frontPlayer = players[frontIdx];
        
        [players[currentIdx], players[frontIdx]] = [players[frontIdx], players[currentIdx]]
        
        rank[name] = frontIdx
        rank[frontPlayer] = currentIdx
    }
    return players
}