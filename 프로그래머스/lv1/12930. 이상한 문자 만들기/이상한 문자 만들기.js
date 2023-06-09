function solution(s) {
    let result = "";
    let i = 0
    
    for (let str of s) {
        result += i % 2 === 0 ? str.toUpperCase() : str.toLowerCase()
        i++
        if (str === " ") i = 0
    }
    
    return result;
}