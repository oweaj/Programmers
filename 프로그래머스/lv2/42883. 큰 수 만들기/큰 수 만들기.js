function solution(number, k) {
    let temp = []
    let result = ""
    
    for (let i = 0; i < number.length; i++) {
        while(number[i] > temp[temp.length - 1] && k) {
            temp.pop()
            k--
        }
        temp.push(number[i])      
    }
    
    return temp.join("").slice(0, temp.length - k)
}