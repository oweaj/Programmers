function solution(numbers) {
    let result = 0;
    
    for (let num of numbers) {
        result += num
    }
    
    return 45 - result;
}