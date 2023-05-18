function solution(n) {
    let str = String(n);
    let result = 0
    
    for (let x of str) {
        result += Number(x)
    }
    
    return result
}