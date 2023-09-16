function solution(arr) {
    let zeroCount = 0
    
    for (let i = 0; i < arr.length; i++) {
        let check = Math.pow(2, i)    
        if (check > arr.length) {
            zeroCount = check - arr.length
            break;
        } else if (check === arr.length) return arr
    }
    for (let i = 0; i < zeroCount; i++) arr.push(0)
    
    return arr;
}