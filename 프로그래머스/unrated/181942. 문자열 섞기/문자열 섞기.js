function solution(str1, str2) {
    let result = ""
    let i = 0
    
    for (let x of str1) {
        result += x + str2[i]
        i++
    }
    
    return result;
}