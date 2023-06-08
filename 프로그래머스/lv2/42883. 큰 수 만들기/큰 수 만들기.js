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

// ex) number "555"이고 k=1 number가 중복일 경우 예외처리 다시 [테케 10번x]