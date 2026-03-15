function solution(s) {
    return s.split(" ").map(i => {
        if(i.length === 0) return ""
        return i[0].toUpperCase() + i.slice(1).toLowerCase()
    }).join(" ")
}