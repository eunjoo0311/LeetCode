class kHeap {
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
    bubbleUp() {
        let index = this.size() - 1

        while(index > 0) {
            let parentIndex = Math.floor((index - 1)/ 2)

            if(this.compare(this.heap[parentIndex], this.heap[index])) {
                break
            }
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]
            index = parentIndex
        }
    }
    pop() {
        if(this.size() === 0) return null
        if(this.size() === 1) return this.heap.pop()

        const top = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown()

        return top
    }
    bubbleDown() {
        let index = 0
        while(true) {
            let targetIndex = index
            let leftIndex = index * 2 + 1
            let rightIndex = index * 2 + 2

            if(leftIndex < this.size() && !this.compare(this.heap[targetIndex], this.heap[leftIndex])) {
                targetIndex = leftIndex
            }
            if(rightIndex < this.size() && !this.compare(this.heap[targetIndex], this.heap[rightIndex])) {
                targetIndex = rightIndex
            }
            if(targetIndex === index) break
            [this.heap[targetIndex], this.heap[index]] = [this.heap[index], this.heap[targetIndex]]
            index = targetIndex
        }
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const heap = new kHeap((a, b) => a <= b)

    for (const num of nums) {
        heap.push(num)

        if (heap.size() > k) {
            heap.pop()
        }
    }

    return heap.peek()
};