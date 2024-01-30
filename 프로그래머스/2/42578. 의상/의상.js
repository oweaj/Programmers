function solution(clothes) {
    let result = 1
    let temp = {}
    
    for (let item of clothes) {
        temp[item[1]] = (temp[item[1]] || 0) + 1
    }
    
    for (let key in temp) {
        result *= temp[key] + 1
    }
    
    return result - 1
}