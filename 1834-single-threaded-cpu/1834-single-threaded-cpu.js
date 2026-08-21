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
    push(val) {
        this.heap.push(val)
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
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function (tasks) {
    const sortedTask = tasks.map((task, index) => [
        task[0], task[1], index
    ])

    sortedTask.sort((a, b) => a[0] - b[0])

    const heap = new cHeap((a, b) => {
        if (a[0] === b[0]) {
            return a[1] <= b[1]
        }
        return a[0] <= b[0]
    })

    const answer = []

    let index = 0
    let time = 0

    while (heap.size() > 0 || index < sortedTask.length) {
        if (heap.size() === 0 && time < sortedTask[index][0]) {
            time = sortedTask[index][[0]]
        }
        while (index < sortedTask.length && sortedTask[index][0] <= time) {
            const [enqueueTime, processingTime, originalIndex] = sortedTask[index]
            heap.push([processingTime, originalIndex])
            index++
        }
        const [processingTime, originalIndex] = heap.pop()
        answer.push(originalIndex)
        time += processingTime
    }

    return answer
};