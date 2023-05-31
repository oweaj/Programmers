function solution(a, b) {
    let min = a > b ? b : a
    let checkNum;
    
    for (let i = 1; i <= min; i++) {
        if(a % i === 0 && b % i === 0) checkNum = i
    }

    let result = b/checkNum
    
    while(result % 2 === 0) result /= 2
    while(result % 5 === 0) result /= 5
    
    return result === 1 ? 1 : 2; 
}
// 77점