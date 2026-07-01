class stoneHeap {
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
        if (this.heap.length === 0) return null
        if (this.heap.length === 1) return this.heap.pop()

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

            if (index === targetIndex) {
                break
            }

            [this.heap[index], this.heap[targetIndex]] = [this.heap[targetIndex], this.heap[index]]

            index = targetIndex
        }
    }

}
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    const maxHeap = new stoneHeap((a, b) => a > b)

    for(let stone of stones) {
        maxHeap.push(stone)
    }

    while(maxHeap.size() > 1) {
        const first = maxHeap.pop()
        const second = maxHeap.pop()

        if(first !== second) {
            maxHeap.push(first - second)
        }
    }

    return maxHeap.size() === 0 ? 0 : maxHeap.pop()
};