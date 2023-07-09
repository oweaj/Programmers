function solution(k, m, score) {
    let sort = score.sort((a, b) => b - a)
    let result = 0
    
    for (let i = 0; i < sort.length; i += m) {
        let box = sort.slice(i, i + m)
        if (box.length === m) {
             result += box[box.length - 1] * m
        }        
    } 
    
    return result
}