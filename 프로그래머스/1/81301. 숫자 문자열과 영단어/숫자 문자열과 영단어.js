function solution(s) {
    const numbers = [
        "zero", "one", "two", "three", "four","five",
        "six","seven", "eight", "nine"
    ]
    numbers.forEach((v, i) => {
        s = s.replaceAll(v, i)
    })
    
    return Number(s)
}