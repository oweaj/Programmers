function solution(arr) {
    let count = 0
        
    while (true) {
        let newArr = arr.map((el) => {
            if (el > 50 && el % 2 === 0) {
                return el / 2
            } else if (el < 50 && el % 2 !== 0) {
                return el * 2 + 1
            } else {
                return el
            }
        })
        
        let check = 0
        arr.forEach((el, i) => {
            if (el === newArr[i]) check++
        })
        if (arr.length === check) {
            break
        } else {
            count++
            arr = newArr 
        }
    }
    return count;
}