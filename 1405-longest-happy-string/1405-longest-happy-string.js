class hHeap {
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
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
    const heap = new hHeap((a, b) => a[0] >= b[0])

    if (a > 0) heap.push([a, 'a'])
    if (b > 0) heap.push([b, 'b'])
    if (c > 0) heap.push([c, 'c'])

    let answer = ""

    while (heap.size() > 0) {
        let [count, char] = heap.pop()
        const len = answer.length
        if (len >= 2 && answer[len - 2] === char && answer[len - 1] === char) {
            if (heap.size() === 0) {
                break
            }
            let [secondCount, secondChar] = heap.pop()
            answer += secondChar
            if (secondCount - 1 > 0) {
                heap.push([secondCount - 1, secondChar])
            }
            heap.push([count, char])
        } else {
            answer += char

            if (count - 1 > 0) {
                heap.push([count - 1, char])
            }
        }
    }
    return answer
};