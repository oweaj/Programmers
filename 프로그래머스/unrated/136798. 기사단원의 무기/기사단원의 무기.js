function solution(number, limit, power) {
    let temp = []
    let result = 0
    
    for (let i = 1; i <= number; i++) {
        temp.push(countNum(i) + 1)
    }
    
    temp.forEach((el, i) => {
        if (limit >= el) {
            result += el
        } else {
            el = power
            result += el
        }
    })
    
    return result
}

function countNum(num) {
    let count = 0
    
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) count++
    }
    
    return count
}