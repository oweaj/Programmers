function solution(n) {
    let nextNum = n
    
    while (n) {
        nextNum++
        if (oneCount(n) === oneCount(nextNum)) {
            return nextNum 
        }
    }
}

function oneCount(num) {
    let count = 0
    let split = num.toString(2).split("")
    for (let item of split) item === "1" && count++
    
    return count
}