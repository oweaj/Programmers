function solution(X, Y) {
    let str = ""
    let result = ""
    X = X.split(''), Y = Y.split('')
    
    for(let i = 0; i <= 9; i++) {
        let checkX = X.filter(x => Number(x) === i).length
        let checkY = Y.filter(y => Number(y) === i).length
        str += i.toString().repeat(Math.min(checkX, checkY))
    }    
    
    if (str) {
        result += str.split("").sort().reverse().join("")
        if (result[0] === "0") return "0"
    } else return "-1"
    
    return result
}

// 테스트 10 ~ 15 시간 초과
//     let temp = []
//     let arrX = [...X], arrY = [...Y]
    
//     for (let i = 0; i < arrX.length; i++) {    
//         for (let j = 0; j < arrY.length; j++) {
//             if (arrX[i] === arrY[j]) {
//                 temp.push(arrX[i])
//                 arrX.splice(i, 1)
//                 arrY.splice(j, 1)
//                 i = 0
//                 j = 0
//             }
//         }
//     }
//     let str = temp.sort((a, b) => b - a).join("")
    
//     return !str.length ? "-1" : str[0] === "0" ? "0" : str