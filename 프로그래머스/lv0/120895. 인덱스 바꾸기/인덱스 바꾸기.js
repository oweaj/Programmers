function solution(my_string, num1, num2) {
    let split = my_string.split("")
    
    split[num1] = my_string[num2]
    split[num2] = my_string[num1]
    
    return split.join("")
}