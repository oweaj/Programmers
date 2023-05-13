function solution(n) {
    let str = n.toString();
    let result = [];
    
    for (let num of str) {
        result.unshift(Number(num))
    }
    
    return result;
}