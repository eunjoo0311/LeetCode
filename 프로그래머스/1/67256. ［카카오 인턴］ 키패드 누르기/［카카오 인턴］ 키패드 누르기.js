function solution(numbers, hand) {
    let answer =""
    let left = "*"
    let right = "#"
    
    for(let num of numbers) {
        const pos = {
            1 : [0,0], 2 : [0,1], 3 : [0,2],
            4 : [1,0], 5 : [1,1], 6 : [1,2],
            7 : [2,0], 8 : [2,1], 9 : [2,2],
            "*" : [3,0], 0 : [3,1], "#" : [3,2],
        }
        if([1,4,7].includes(num)) {
            answer += "L"
            left = num
        } else if([3,6,9].includes(num)) {
            answer += "R"
            right = num
        } else {
            const [lx, ly] = pos[left]
            const [rx, ry] = pos[right]
            const [nx, ny] = pos[num]
            
            const leftDist = Math.abs(lx - nx) + Math.abs(ly - ny)
            const rightDist = Math.abs(rx- nx) + Math.abs(ry- ny)
            if(leftDist < rightDist) {
                answer += "L"
                left = num
            } else if(leftDist > rightDist) {
                answer += "R"
                right = num
            } else {
                if(hand === "right") {
                    answer += "R"
                    right = num
                } else {
                    answer += "L"
                    left = num
                }
            }
        }
    }
    
    return answer
}