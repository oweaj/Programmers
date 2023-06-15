function solution(s) {
    let check = []
    let result = []
    
    for (let i = 0; i < s.length; i++) {
        if (!check.includes(s[i])) {
            check.push(s[i])
            result.push(-1)
        } else {
            result.push(i - check.lastIndexOf(s[i]))
            check.push(s[i])
        }
    }
    
    return result;
}