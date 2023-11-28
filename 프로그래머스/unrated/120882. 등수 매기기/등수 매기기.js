function solution(score) {
    let avg = score.map(([a, b]) => (a + b) / 2)
    let sort = [...avg].sort((a, b) => b - a) 
    let result = []
    
    avg.filter((el) => result.push(sort.indexOf(el) + 1))
    
    return result
}