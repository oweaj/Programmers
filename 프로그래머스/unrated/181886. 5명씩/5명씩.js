function solution(names) {
//     let result = []
    
//     for (let i = 0; i < names.length; i += 5) {
//         result.push(names[i])
//     }
    
//     return result
    
    
    // 다른방법 filter로 풀기
    return names.filter((el, i) => i % 5 === 0)
}