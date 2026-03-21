function solution(park, routes) {
    const h = park.length;
    const w = park[0].length;
    
    let x= 0
    let y= 0
    for(let i = 0; i<h; i++) {
        for(let j = 0; j<w; j++) {
            if(park[i][j] === "S") {
                x = i
                y = j
            }
        }
    }
    
    const dirMap = {
        "W" : [0, -1],
        "S" : [1, 0],
        "E" : [0 ,1],
        "N" : [-1, 0],
    }
    
    for (let route of routes) {
        const [dir, str] = route.split(" ")
        const dist = Number(str)
        const [dx, dy] = dirMap[dir];
        
        let nx = x;
        let ny = y
        let canmove = true
        
        for(let i = 0; i<dist; i++) {
            nx += dx;
            ny += dy;
            
            if(nx < 0 || ny<0 || nx >=h || ny >= w || park[nx][ny] === "X") {
                canmove = false
                break;
            }
        }
        if(canmove) {
            y = ny
            x = nx
        }
    }
    return [x,y]
}