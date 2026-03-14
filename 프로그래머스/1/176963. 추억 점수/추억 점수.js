function solution(name, yearning, photo) {
    const scoreMap = {}
    for(let i = 0; i<name.length; i++) {
        scoreMap[name[i]] = yearning[i]
    }
    const result = []
    for(let people of photo) {
        let sum = 0;
        for(let person of people) {
            sum += scoreMap[person] || 0
        }
        result.push(sum)
    }
    return result
}