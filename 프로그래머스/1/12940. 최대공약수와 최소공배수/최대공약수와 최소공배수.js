function gcp (a,b) {
    while(b !== 0) {
        const r = a % b;
        a = b;
        b = r
    }
    return a;
}

function solution(n, m) {
    const g = gcp(n,m)
    const l = n * m / g
    return [g,l]
}