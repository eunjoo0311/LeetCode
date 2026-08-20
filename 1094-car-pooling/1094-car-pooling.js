class cHeap {
    constructor(compare) {
        this.heap = []
        this.compare = compare
    }
    size() {
        return this.heap.length
    }
    peek() {
        return this.heap[0]
    }
    push(value) {
        this.heap.push(value)
        this.bubbleUp()
    }
    pop() {
        if (this.size() === 0) return null
        if (this.size() === 1) return this.heap.pop()

        const top = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown()

        return top
    }
    bubbleUp() {
        let index = this.size() - 1

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)

            if (this.compare(this.heap[parentIndex], this.heap[index])) {
                break
            }
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]
            index = parentIndex
        }
    }
    bubbleDown() {
        let index = 0

        while (true) {
            let targetIndex = index

            let leftIndex = index * 2 + 1
            let rightIndex = index * 2 + 2

            if (leftIndex < this.size() && !this.compare(this.heap[targetIndex], this.heap[leftIndex])) {
                targetIndex = leftIndex
            }

            if (rightIndex < this.size() && !this.compare(this.heap[targetIndex], this.heap[rightIndex])) {
                targetIndex = rightIndex
            }
            if (targetIndex === index) {
                break
            }

            [this.heap[targetIndex], this.heap[index]] = [this.heap[index], this.heap[targetIndex]]

            index = targetIndex
        }
    }
}

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
    trips.sort((a,b) => a[1] - b[1])

    const heap = new cHeap((a,b) => a[0] <= b[0]) 
    let currentPassengers = 0

    for(const trip of trips) {
        const [numPassengers, from, to] = trip

        while(heap.size() > 0 && heap.peek()[0] <= from) {
            currentPassengers -= heap.pop()[1]
        }
        currentPassengers += numPassengers

        if(currentPassengers > capacity) {
            return false
        }

        heap.push([to, numPassengers])
    }
    return true
}