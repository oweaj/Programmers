function solution(n, left, right) {
    let result = []
    
    for (let i = left; i <= right; i++) {
        let col = parseInt(i / n)
        let row = i % n
        let check = Math.max(col, row)
        result.push(check + 1)
    }
    
    return result;
}