function solution(num, k) {
    let str = String(num)
    
    return str.includes(k) ? str.indexOf(String(k)) + 1 : -1
}