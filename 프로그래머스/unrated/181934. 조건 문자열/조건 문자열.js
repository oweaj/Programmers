function solution(ineq, eq, n, m) {
    
    if (n >= m && ineq === ">" && eq === "=") {
        return 1
    } else if (n <= m && ineq === "<" && eq === "=") {
        return 1
    } else if (n > m && ineq === ">" && eq === "!") {
        return 1
    } else if (n < m && ineq === "<" && eq === "!") {
        return 1
    } else {
        return 0
    }
}