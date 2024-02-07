function solution(s) {
    let count = 0

    for (let x of s) {
        x === "(" ? count++ : count--
        if (count < 0) return false
    }
    
    return !count
}