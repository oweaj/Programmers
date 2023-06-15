function solution(n, m){ 
    let result = [0, 0]
    let max = Math.max(n, m)
    
    for (let i = 1; i <= max; i++) {
        if (n % i === 0 && m % i === 0) {
            result[0] = i
        }
    }
    
    result[1] = n * m / result[0]
    
    return result;
}
