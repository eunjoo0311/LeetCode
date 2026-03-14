function solution(n, arr1, arr2) {
    const result = []
    for(let i = 0; i<n; i++) {
        const bin1 = arr1[i].toString(2).padStart(n,"0")
        const bin2 = arr2[i].toString(2).padStart(n,"0")
        
        let row = ""
        for(let j = 0; j<n; j++) {
            if(bin1[j] === "1" || bin2[j] === "1") {
                row += "#"
            } else {
                row += " "
            }
        }
        result.push(row)
    }
    return result
}