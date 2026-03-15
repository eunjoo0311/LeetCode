function solution(participant, completion) {
    const map = {}
    
    for(let people of participant) {
        if(map[people] === undefined) {
            map[people] = 1
        } else {
            map[people] ++
        }
    }
    
    for(let complete of completion) {
        if(map[complete]) {
            map[complete] --
        }
    }
    for(let key in map) {
        if(map[key] !== 0) {
            return key
        }
    }
}