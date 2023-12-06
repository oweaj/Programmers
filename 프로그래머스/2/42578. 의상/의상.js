function solution(clothes) {
    let map = new Map()
    let result = 1
    
    for (let item of clothes) {
        if (map.has(item[1])) {
            map.set(item[1], map.get(item[1]) + 1)    
        } else {
            map.set(item[1], 1)
        }
    }
    
    for (let [key, value] of map) {
        result *= value + 1
    }
    
    return result - 1   
}