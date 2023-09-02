function solution(arr, queries) {
    let result = [] 
    
    for (let [s,e,k] of queries) {
        let slice = arr.slice(s, e + 1)
        let temp = 1000000
        for (let x of slice) {
            if (x > k && x <= temp) temp = x
        }
        if (temp === 1000000) temp = -1
        result.push(temp)
    }
    
    return result;
}