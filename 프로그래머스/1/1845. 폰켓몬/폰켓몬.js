function solution(nums) {
    const kindCount = new Set(nums).size
    const canPick = Math.floor(nums.length/2)
    return Math.min(kindCount, canPick)
}