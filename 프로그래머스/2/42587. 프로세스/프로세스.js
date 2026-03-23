function solution(priorities, location) {
    let queue = priorities.map((priority, index) => ({
        priority, index
    }))
    
    let count = 0;
    
    while(queue.length) {
        const current = queue.shift()
        
        if(queue.some(q => q.priority > current.priority)) {
            queue.push(current)
        } else {
            count++
            if(current.index === location) {
                return count;
            }
        }
    }
}