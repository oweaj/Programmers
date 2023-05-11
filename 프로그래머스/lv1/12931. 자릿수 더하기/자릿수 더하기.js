function solution(n) {
    let str = n.toString()
    let result = 0;
    
    for (let num of str) {
        result += Number(num)
    }
    
    return result;
}