function solution(a, b) {
    let result = 0;
    
    for (let num in a) {
        result += a[num] * b[num];
    }
        
    return result;
}
