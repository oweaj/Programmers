function solution(clothes) {
    let temp = {}
    let result = 1
    
    clothes.forEach((item) => {
        temp[item[1]] = (temp[item[1]] || 0) + 1
    })
    
    for (let i in temp) {
        result *= temp[i] + 1
    }
    
    // 둘다 의상을 안입는 경우는 해당안되니 -1
    return result - 1;
}