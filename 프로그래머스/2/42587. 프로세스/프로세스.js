function solution(priorities, location) {
    let arr = priorities.map((el, index) => [el, index])
    let result = 0
    
    while(arr.length) {
        let q = arr.shift()  
        if (arr.some((el) => el[0] > q[0])) arr.push(q)
        else {
            result++
            if (location === q[1]) break
        }
    }
    
    return result;
}