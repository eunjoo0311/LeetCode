function solution(a, b) {
    const dayList = [
        "SUN","MON","TUE","WED","THU","FRI","SAT"
    ]
    const day = [
        31,29,31,30,31,30,31,31,30,31,30,31
    ]
    
    let days = 0;
    for(let i = 0; i<a-1; i++) {
        days += day[i]
    }
    days += b;
    return dayList[(days +4) % 7]
}