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
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
    const heap = new hHeap((a,b) => a[0] >= b[0])

    if(a > 0) heap.push([a, 'a'])
    if(b > 0) heap.push([b, 'b'])
    if(c > 0) heap.push([c, 'c'])

    let answer = ""

    while(heap.size() > 0) {
        let [count, char] = heap.pop()

        if(answer.length >= 2 && answer[answer.length - 1] === char && answer[answer.length - 2] === char) {
            if(heap.size() === 0) {
                break
            }

            let [secondCount, secondChar] = heap.pop()

            answer += secondChar
            secondCount--

            if(secondCount > 0) {
                heap.push([secondCount, secondChar])
            }
            heap.push([count, char])
        } else {
            answer += char
            count--

            if(count > 0) {
                heap.push([count, char])
            }
        }
    }
    return answer
};