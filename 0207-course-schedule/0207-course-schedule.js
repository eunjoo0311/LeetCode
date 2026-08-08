/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = Array.from({length : numCourses}, () => [])
    // 선수 과목을 담을 배열 만들기

    for(let [a, b] of prerequisites) {
        graph[b].push(a)
    }
    // 배열에 담기

    const visited = Array(numCourses).fill(0)
    // 방문 여부 처리

    const dfs = (course) => {
        if(visited[course] === 1) return false
        // 이미 방문 중이라면
        if(visited[course] === 2) return true
        // 방문 끝이라면

        visited[course] = 1

        for(let next of graph[course]) {
            if(!dfs(next)) {
                return false
            }
        }
        visited[course] = 2
        return true
    }

    for(let i = 0; i < numCourses; i++) {
        if(!dfs(i)) {
            return false
        }
    }
    return true
};