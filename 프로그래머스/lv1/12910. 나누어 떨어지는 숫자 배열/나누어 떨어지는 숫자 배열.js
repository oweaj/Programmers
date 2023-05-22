function solution(arr, divisor) {
    let result = [];
    let sort = arr.sort((a, b) => a - b);
    
    for (let num of sort) {
        if (num % divisor === 0) {
            result.push(num)
        }       
    }
    
    return result.length === 0 ? [-1] : result
}