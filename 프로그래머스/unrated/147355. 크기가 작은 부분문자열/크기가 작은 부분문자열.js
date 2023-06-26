function solution(t, p) {
    let count = 0;
    let check = 0
    
    for (let i = 0; i <= t.length - p.length; i++) {
        check = t.substr(i, p.length)
        if (Number(p) >= Number(check)) {
            count++
        }
    }
    
    return count;
}