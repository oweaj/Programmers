function solution(arr) {
    let result = []
    
    if (!arr.includes(2)) return [-1]
    
    arr.forEach((el, i) => {
        if (el === 2) result.push(i)
    })    
    
    return result.length === 1 ? [arr[result[0]]] : arr.slice(result[0], result[result.length - 1] + 1)
}