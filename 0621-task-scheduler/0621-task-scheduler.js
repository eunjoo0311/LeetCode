/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const map = {}

    for(let task of tasks) {
        map[task] = (map[task] || 0) + 1
    }

    let maxCount = 0;
    for(let task in map) {
        maxCount = Math.max(maxCount, map[task])
    }

    let freqMaxCount = 0;

    for(let task in map) {
        if(map[task] === maxCount) {
            freqMaxCount++
        }
    }

    let maxlength = (maxCount - 1) * (n + 1) + freqMaxCount

    return Math.max(tasks.length, maxlength)
};