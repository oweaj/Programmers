function solution(order) {
    let result = 0
    
    for (let x of order) {
        if (x.includes("cafelatte")) result += 5000
        else result += 4500
    }
    
    return result
}