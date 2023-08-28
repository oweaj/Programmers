function solution(code) {
    let str = ""
    let mode = 0
    
    for (let i = 0; i < code.length; i++) {
        if (!mode) {
            if (code[i] === "1") mode++
            else if (i % 2 === 0) str += code[i]
        } else {
            if (code[i] === "1") mode--
            else if (i % 2 !== 0) str += code[i]
        }
    }
    
    return !str.length ? "EMPTY" : str;
}