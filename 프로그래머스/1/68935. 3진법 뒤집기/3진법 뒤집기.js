function solution(n) {
    const a = n.toString(3)
    const b = a.split("").reverse().join('')
    return parseInt(b,3)
}