class DHeap {
  constructor(compare) {
    this.heap = [];
    this.compare = compare;
  }

  size() {
    return this.heap.length;
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();

    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return top;
  }

  bubbleUp() {
    let index = this.size() - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.compare(this.heap[parentIndex], this.heap[index])) {
        break;
      }

      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];

      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;

    while (true) {
      let targetIndex = index;
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;

      if (
        leftIndex < this.size() &&
        !this.compare(this.heap[targetIndex], this.heap[leftIndex])
      ) {
        targetIndex = leftIndex;
      }

      if (
        rightIndex < this.size() &&
        !this.compare(this.heap[targetIndex], this.heap[rightIndex])
      ) {
        targetIndex = rightIndex;
      }

      if (targetIndex === index) break;

      [this.heap[index], this.heap[targetIndex]] = [
        this.heap[targetIndex],
        this.heap[index],
      ];

      index = targetIndex;
    }
  }
}

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const graph = Array.from({ length: n + 1 }, () => []);

  for (const [u, v, w] of times) {
    graph[u].push([v, w]);
  }

  const dist = Array(n + 1).fill(Infinity);
  dist[k] = 0;

  const minHeap = new DHeap((a, b) => a[1] < b[1]);

  minHeap.push([k, 0]);

  while (minHeap.size() > 0) {
    const [curNode, curTime] = minHeap.pop();

    if (curTime > dist[curNode]) continue;

    for (const [nextNode, nextTime] of graph[curNode]) {
      const totalTime = curTime + nextTime;

      if (totalTime < dist[nextNode]) {
        dist[nextNode] = totalTime;
        minHeap.push([nextNode, totalTime]);
      }
    }
  }

  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (dist[i] === Infinity) {
      return -1;
    }

    answer = Math.max(answer, dist[i]);
  }

  return answer;
};