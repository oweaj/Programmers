function solution(arr) {
    const gcd = (a, b) => {
        return a % b ? gcd(b, a % b) : b
    }    
    
    return arr.reduce((a, b) => a * b / gcd(a, b))
}