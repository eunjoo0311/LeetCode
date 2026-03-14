function solution(n) {
    const arr = new Array(n+1).fill(true)
    
    arr[0] = false
    arr[1] = false
    
    for(let i = 2; i*i<= n; i++) {
        if(arr[i]) {
            for(let j = i*i; j<=n; j+=i) {
                arr[j] = false
            }
        }
    }
    return arr.filter(v => v).length
}