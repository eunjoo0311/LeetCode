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
            const parentIndex = Math.floor((index - 1) / 2)

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

            const leftIndex = index * 2 + 1
            const rightIndex = index * 2 + 2

            if (leftIndex < this.size() && !this.compare(this.heap[targetIndex], this.heap[leftIndex])) {
                targetIndex = leftIndex
            }

            if (rightIndex < this.size() && !this.compare(this.heap[targetIndex], this.heap[rightIndex])) {
                targetIndex = rightIndex
            }
            if (targetIndex === index) {
                break
            }

            [this.heap[targetIndex], this.heap[index]] =
                [this.heap[index], this.heap[targetIndex]]

            index = targetIndex
        }
    }
}

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.k = k

    this.heap = new kHeap((a,b) => a <=b)

    for (const num of nums) {
        this.heap.push(num)

        if (this.heap.size() > k) {
            this.heap.pop()
        }
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.heap.push(val)

    if(this.heap.size() > this.k) {
        this.heap.pop()
    }

    return this.heap.peek()
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */