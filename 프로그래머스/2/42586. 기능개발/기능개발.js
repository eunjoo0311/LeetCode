function solution(progresses, speeds) {
    const answer = []
    const days = []
    
    for(let i = 0; i<progresses.length; i++) {
        const remain = 100 - progresses[i]
        const day = Math.ceil(remain / speeds[i])
        days.push(day)
    }
    
    let current = days[0]
    let count = 1;
    
    for(let i = 1; i<days.length; i++) {
        if(current >= days[i]) {
            count++
        } else {
            answer.push(count)
            current = days[i]
            count = 1
        }
    }
    
    answer.push(count)
    return answer;
}