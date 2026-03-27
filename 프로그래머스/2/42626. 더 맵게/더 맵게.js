class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if (this.size() === 1) return this.heap.pop();
    if (this.size() === 0) return null;

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  bubbleUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (this.heap[parentIndex] <= this.heap[currentIndex]) break;

      [this.heap[parentIndex], this.heap[currentIndex]] = [
        this.heap[currentIndex],
        this.heap[parentIndex],
      ];

      currentIndex = parentIndex;
    }
  }

  bubbleDown() {
    let currentIndex = 0;
    const length = this.heap.length;

    while (true) {
      let leftChildIndex = currentIndex * 2 + 1;
      let rightChildIndex = currentIndex * 2 + 2;
      let smallest = currentIndex;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex] < this.heap[smallest]
      ) {
        smallest = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] < this.heap[smallest]
      ) {
        smallest = rightChildIndex;
      }

      if (smallest === currentIndex) break;

      [this.heap[currentIndex], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[currentIndex],
      ];

      currentIndex = smallest;
    }
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();
  let count = 0;

  for (const s of scoville) {
    minHeap.push(s);
  }

  while (minHeap.size() > 1 && minHeap.peek() < K) {
    const first = minHeap.pop();
    const second = minHeap.pop();

    const mixed = first + second * 2;
    minHeap.push(mixed);
    count++;
  }

  return minHeap.peek() >= K ? count : -1;
}