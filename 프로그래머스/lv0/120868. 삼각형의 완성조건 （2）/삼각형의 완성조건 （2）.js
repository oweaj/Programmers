function solution(sides) {
    let sort = sides.sort((a,b) => b-a)
    let minNum = sort[0] - sort[1] + 1
    let maxNum = sort[0] + sort[1] - 1 
    let count = 0
        
    for (let i = minNum; i <= maxNum; i++) {
        count++
    }
    
    return count;
}