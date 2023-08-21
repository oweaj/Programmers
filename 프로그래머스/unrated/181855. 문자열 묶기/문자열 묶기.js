function solution(strArr) {
    let check = {}
    let result = 0
    
    strArr.forEach((el) => {
        check[el.length] = (check[el.length] || 0) + 1
    })
    
    for (let i in check) {
        if (check[i] > result) result = check[i]
    }
    
    return result
}