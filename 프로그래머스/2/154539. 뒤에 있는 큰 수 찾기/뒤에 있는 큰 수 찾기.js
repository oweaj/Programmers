function solution(numbers) {
    let stack = []
    const result = Array(numbers.length).fill(-1)
    
    for (let i = 0; i < numbers.length; i++) {
        let check = numbers[i]
        while (stack.length && numbers[stack.at(-1)] < check) {
            result[stack.pop()] = check
        }
        stack.push(i)
    }
    
    return result;
}