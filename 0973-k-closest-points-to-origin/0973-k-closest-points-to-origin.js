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
            let parentIndex = Math.floor((index - 1) / 2)

            if (this.compare(this.heap[parentIndex], this.heap[index])) break
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]
            index = parentIndex
        }
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
            if(targetIndex === index) {
                break
            }
            [this.heap[targetIndex], this.heap[index]] = [this.heap[index], this.heap[targetIndex]]
            index = targetIndex
        }
    }
}

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    const heap = new kHeap((a,b) => a[0] <= b[0])

    for(const point of points) {
        const [x,y] = point

        heap.push([x * x + y * y, point])
    }

    const answer = []

    for(let i = 0; i < k; i++) {
        const temp = heap.pop()
        answer.push(temp[1])
    }
    return answer
};