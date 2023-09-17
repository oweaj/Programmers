function solution(n) {
    let fArr = [0, 1]
    
    for (let i = 2; i <= n; i++) {
        fArr.push((fArr[i - 2] + fArr[i - 1]) % 1234567) 
    }
    
    return fArr[n]
}