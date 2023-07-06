function solution(arr, n) {
    let result = []
    
    arr.forEach((el, i) => {
        if (arr.length % 2 !== 0) {
            i % 2 === 0 ? result.push(el + n) : result.push(el)    
        } else {
            i % 2 !== 0 ? result.push(el + n) : result.push(el)
        }
    })
    
    return result;
}