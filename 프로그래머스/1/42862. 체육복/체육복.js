function solution(n, lost, reserve) {
    const realLost = lost.filter(v => !reserve.includes(v)).sort((a,b) => a-b)
    const realReserve = reserve.filter(v => !lost.includes(v)).sort((a,b) => a-b)
    
    let count = n - realLost.length
    
    for(let i = 0; i<realLost.length; i++) {
        const student = realLost[i]
        const idx = realReserve.findIndex(v => v=== student -1 || v === student + 1)
        if(idx !== -1) {
            count++;
            realReserve.splice(idx, 1)
        }
    }
    return count
}