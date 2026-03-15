function solution(clothes) {
    const map = {}
    
    for(let i = 0; i<clothes.length; i++) {
        if(map[clothes[i][1]] === undefined) {
            map[clothes[i][1]] = 1
        } else {
            map[clothes[i][1]] ++
        }
    }
    
    let result = 1;
    for (let key in map) {
        result *= (map[key] + 1)
    }
    return result -1
}