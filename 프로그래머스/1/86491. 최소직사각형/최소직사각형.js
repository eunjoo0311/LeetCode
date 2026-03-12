function solution(sizes) {
    let maxH = 0;
    let maxW = 0;
    
    for(let i = 0; i<sizes.length; i++) {
        let [w, h] = sizes[i]
        if (w< h) {
            [w,h] = [h,w]
        }
        maxH = Math.max(maxH, h)
        maxW = Math.max(maxW, w)
    }
    return maxH * maxW
}