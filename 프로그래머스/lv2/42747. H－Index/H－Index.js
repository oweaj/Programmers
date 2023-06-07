function solution(citations) {
    let sort = citations.sort((a, b) => b - a)
    let count = 0
    
    sort.forEach((el, i) => {
        if (i < el) count++
    })
    
    return count;
}