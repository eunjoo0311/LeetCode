function solution(today, terms, privacies) {
    const termsList = {}
    const answer = []
    
    for(let term of terms) {
        const [type, num] = term.split(" ")
        termsList[type] = num
    }
    const todayDays = toDays(today)
    
    for(let i = 0; i<privacies.length; i++) {
        const [date, type] = privacies[i].split(" ")
        const expireDays = toDays(date) + termsList[type] * 28 -1
        if(expireDays < todayDays) {
            answer.push(i + 1)
        }
    }
    return answer
}

function toDays(date) {
    const [y,m,d] = date.split('.').map(Number)
    return y * 12 * 28 + m * 28 + d
}