function solution(N, stages) {
    let size = stages.length
    let temp = []
    
    for (let i = 1; i <= N; i++) {
        let findCount = stages.filter(num => num === i).length
        let fail = findCount / size
        temp.push({i, fail})
        size -= findCount   
    }
    temp.sort((a, b) => b.fail - a.fail)
    return temp.map(el => el.i)
}