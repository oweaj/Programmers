function solution(n) {
    let temp = new Array(n).fill(0)
    temp[0] = 1
    temp[1] = 2
    
    for (let i = 2; i < n; i++) {
        temp[i] = (temp[i - 1] + temp[i - 2]) % 1234567
    }
    
    return temp[n - 1]
}