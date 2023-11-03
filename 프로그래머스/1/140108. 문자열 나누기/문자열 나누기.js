function solution(s) {
    let temp = []
    let count = 0
    
    for (let word of s) {
        temp.push(word)
        
        let x = temp[0]
        let True = temp.filter((el) => el === x)
        let False = temp.filter((el) => el !== x)
        if (True.length === False.length) {
            count++
            temp = []
        }
    }
    temp.length && count++
    return count
}