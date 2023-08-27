function solution(l, r) {
    let result = []
    
    for (let i = l; i <= r; i++) {
        if (i % 5 === 0) {
            let str = String(i).split("")
            if (str.every(el => el === "0" || el === "5")) result.push(i)
        }
    }
    
    return !result.length ? [-1] : result
}