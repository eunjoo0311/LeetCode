function solution(arr) {
    const minNum = Math.min(...arr)
    const result = arr.filter(v => v !== minNum)
    
    return result.length === 0 ? [-1] : result
}