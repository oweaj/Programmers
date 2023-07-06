function solution(myString) {
    let result = ""
    
    for (let str of myString) {
        str.charCodeAt() <= 108 ? result += "l" : result += str
    }
    
    return result;
}