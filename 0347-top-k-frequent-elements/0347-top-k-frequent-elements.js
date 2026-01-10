/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map()

    for(const s of nums) {
        const key = s

        if(!map.has(key)) {
            map.set(key,0)
        }
        map.set(key, map.get(key)+1 )
    }
    return Array.from(map.entries()).sort((a,b) => b[1] - a[1]).slice(0, k).map(([num]) => num)
};