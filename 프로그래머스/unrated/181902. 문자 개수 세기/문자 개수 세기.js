function solution(my_string) {
    let newArr = Array(52).fill(0)
    
    for (let str of my_string) {
        if (str.charCodeAt() < 97) {
            newArr[str.charCodeAt() - 65] += 1
        } else {
            newArr[str.charCodeAt() - 71] += 1   
        }
    }
    
    return newArr;
}