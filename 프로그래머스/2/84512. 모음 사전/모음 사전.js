function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    let count = 0;
    let answer = 0;
    
    function dfs(current) {
        if(current === word) {
            answer=count;
            return
        }
        if(current.length === 5) return
        
        for(let i = 0; i< 5; i++) {
            count++
            dfs(current + vowels[i])
        }
    }
    dfs('')
    return answer
}