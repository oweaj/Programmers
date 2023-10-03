function solution(s) {
    let result = [0, 0]
    
    while (s.length > 1) {
        result[0]++
        let one = 0
        for (let x of s) {
            !+x ? result[1]++ : one++
        }
        s = one.toString(2)
        console.log(s)
    }
    
    return result;
}