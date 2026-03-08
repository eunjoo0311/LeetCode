function solution(phone_number) {
    var answer = '';
    let arrPhone = [...phone_number.toString()]
    for(let i = 0; i<arrPhone.length; i++) {
        if(i < arrPhone.length -4) {
            answer += '*'
        } else {
            answer += arrPhone[i]
        }
    }
    return answer;
}