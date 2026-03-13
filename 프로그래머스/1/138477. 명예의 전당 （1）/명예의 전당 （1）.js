function solution(k, score) {
    const hall = [];
    const result = []
    for(let i of score) {
        hall.push(i)
        hall.sort((a,b) => a-b);
        if(hall.length > k) hall.shift()
        result.push(hall[0])
    }
    return result
}