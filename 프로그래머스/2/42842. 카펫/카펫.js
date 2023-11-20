function solution(brown, yellow) {
    let total = brown + yellow
    let temp = []
    
    for (let i = 3; i < total / 2; i++) {
        if (total % i === 0) temp.push([total / i, i])
    }
    
    for (let x of temp) {
        if (brown === (x[0] + x[1]) * 2 - 4) return x    
    }
}