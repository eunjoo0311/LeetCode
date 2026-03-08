function solution(n)
{
    let sum = 0;
    for(let i of [...n.toString()]) {
        sum += Number(i)
    }

    return sum;
}