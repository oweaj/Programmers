function solution(n) {
    let result = 0
    
    while (n > 0) {
        if (n % 2) {
            n -= 1
            result++
        } else {
            n /= 2
        }
    }
    
    return result
}