class MedianHeap {
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

            [this.heap[index], this.heap[targetIndex]] = [this.heap[targetIndex], this.heap[index]]

            index = targetIndex
        }
    }
}
var MedianFinder = function () {
    this.maxHeap = new MedianHeap((a, b) => a > b)
    this.minHeap = new MedianHeap((a, b) => a < b)
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    this.maxHeap.push(num)
    this.minHeap.push(this.maxHeap.pop())

    if(this.minHeap.size() > this.maxHeap.size()) {
        this.maxHeap.push(this.minHeap.pop())
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    if(this.maxHeap.size() > this.minHeap.size()) {
        return this.maxHeap.peek()
    }

    return (this.minHeap.peek() + this.maxHeap.peek()) / 2
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */