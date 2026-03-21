function solution(video_len, pos, op_start, op_end, commands) {
    const videoLen = toSeconds(video_len)
    let currentTime = toSeconds(pos)
    const opStart  = toSeconds(op_start)
    const opEnd = toSeconds(op_end)
    
    currentTime = skipOpening(currentTime, opStart, opEnd)
    
    for(let command of commands) {
        if(command === "next") {
            currentTime += 10;
            if(currentTime > videoLen) currentTime = videoLen
        } else {
            currentTime -= 10
            if(currentTime < 0) currentTime = 0
        }
        currentTime = skipOpening(currentTime, opStart, opEnd)
    }
    return toStringTime(currentTime)
}

function toSeconds(time) {
    const [mm, ss] = time.split(":").map(Number);
    return mm * 60 + ss
}
function toStringTime(seconds) {
    const mm = String(Math.floor(seconds / 60)).padStart(2, "0")
    const ss = String(seconds % 60).padStart(2, "0")
    return `${mm}:${ss}`
}

function skipOpening(currentTime, opStart, opEnd) {
    if(currentTime >= opStart && currentTime <= opEnd) {
        return currentTime = opEnd
    }
    return currentTime
}