function solution(schedules, timelogs, startday) {
    let answer = 0;
    
    for(let i = 0; i<schedules.length; i++) {
        const goalTime = addTenMinutes(schedules[i])
        let isValid = true
        for(let j = 0; j<timelogs[i].length; j++) {
            const day = (startday - 1 + j) % 7 + 1
            if(day === 6 || day === 7) continue;
            if(goalTime < timelogs[i][j]) {
                isValid = false
                break
            }
        }
        if(isValid) answer++
    }
    return answer
}

function addTenMinutes(time) {
    let hour = Math.floor(time / 100)
    let minute = time % 100
    
    minute += 10
    
    if(minute >= 60) {
        hour++
        minute -= 60
    }
    
    return hour * 100 + minute
}