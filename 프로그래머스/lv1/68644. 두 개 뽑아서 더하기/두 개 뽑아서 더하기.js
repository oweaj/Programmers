function solution(numbers) {
    let temp = [];
    let result;
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j]) 
        } 
        result = [...new Set(temp)].sort((a, b) => a - b)
    }
    
    return result
}