function solution(food) {
    let left ="";
    for(let i = 0; i<food.length; i++) {
        left += String(i).repeat(Math.floor(food[i] / 2));
    }
    return left + "0" + [...left].reverse().join('')
}