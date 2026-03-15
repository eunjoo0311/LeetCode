function solution(keymap, targets) {
    const map = {}
    
    for(let key of keymap) {
        for(let i = 0; i<key.length; i++) {
            const char = key[i]
            
            if(map[char] === undefined || map[char] > i+1) {
                map[char] = i + 1
            }
        }
    }
    console.log(map)
    const result = []
    
    for(let word of targets) {
        let sum = 0;
        let possible = true;
        
       for(let char of word) {
           if(map[char] === undefined) {
               possible = false
               break;
           }
           sum += map[char]
       }
        result.push(possible ? sum: -1)
    }
    return result
}