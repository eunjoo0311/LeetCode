function solution(bridge_length, weight, truck_weights) {
    const bridge = Array(bridge_length).fill(0)
    let time = 0;
    let currentWeight = 0;
    
    while(truck_weights.length > 0 || currentWeight > 0) {
        time++
        
        const passedTruck = bridge.shift()
        currentWeight -= passedTruck
        
        if(truck_weights.length > 0) {
            const nextTruck = truck_weights[0]
            
            if(currentWeight + nextTruck <= weight) {
                bridge.push(nextTruck)
                currentWeight += nextTruck
                truck_weights.shift()
            } else {
                bridge.push(0)
            }
        }
        else {
            bridge.push(0)
        }
    }
    return time
}