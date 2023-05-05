function solution(my_string, n) {
    let result = "";
    
    for (str of my_string) {
        result += str.repeat(n)
    }
    
    return result;
}