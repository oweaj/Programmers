function solution(n, m, section) {
    let result = 0
    let temp = 0
    
    section.forEach((el) => {
        if (el > temp) {
            result++
            temp = el + m - 1
        }
    })
    
    return result;
}