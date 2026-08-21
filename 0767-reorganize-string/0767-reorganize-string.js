class sHeap {
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
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
    const map = {}

    for (const char of s) {
        map[char] = (map[char] || 0) + 1
    }

    const heap = new sHeap((a, b) => a[0] >= b[0])

    for (const char in map) {
        heap.push([map[char], char])
    }

    let answer = ""
    let prev = null

    while (heap.size() > 0) {
        let [freq, char] = heap.pop()
        answer += char

        if (prev !== null && prev[0] > 0) {
            heap.push(prev)
        }
        prev = [freq - 1, char]
    }
    if (prev !== null && prev[0] > 0) {
        answer = ""
    }
    return answer
};