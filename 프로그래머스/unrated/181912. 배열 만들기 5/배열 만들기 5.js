function solution(intStrs, k, s, l) {
    let result = []
    
    for (let x of intStrs) {
        let newStr = x.substr(s, l)
        if (newStr > k) result.push(Number(newStr))
    }
    
    return result;
}