function solution(arr) {
    let min = Math.min(...arr)
    let result = []
    
    for (let num of arr) {
        if (min !== num) result.push(num)
    }
       
    return arr.length === 1 ? [-1] : result
}