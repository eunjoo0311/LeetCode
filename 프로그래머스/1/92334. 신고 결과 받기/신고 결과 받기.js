function solution(id_list, report, k) {
    const reportMap = {}
    const count  = {}
    const answer = Array(id_list.length).fill(0)
    
    for(let id of id_list) {
        reportMap[id] = new Set();
        count[id] = 0;
    }

    for(let r of report) {
        const [from, to] = r.split(" ")
        reportMap[from].add(to)
    }
    
    for(let user in reportMap) {
        for(let target of reportMap[user]) {
            count[target]++
        }
    }
    id_list.forEach((user, i) => {
        for(let target of reportMap[user]) {
            if(count[target] >= k) {
                answer[i]++
            }
        }
    })
    return answer
}