function solution(survey, choices) {
    const score = {
        R : 0, T : 0,
        C : 0, F : 0,
        J : 0, M : 0,
        A : 0, N : 0
    }
    
    for(let i = 0; i<survey.length; i++) {
        const [first, second] = survey[i]
        const choice = choices[i]
        const point = Math.abs(choice - 4)
        
        if(choice < 4) {
            score[first] += point
        } else if(choice > 4) {
            score[second] += point
        }
    }
    let result = ""
    result += score.R >= score.T ? "R":"T"
    result += score.C >= score.F ? "C":"F"
    result += score.J >= score.M ? "J":"M"
    result += score.A >= score.N ? "A":"N"
    return result
}