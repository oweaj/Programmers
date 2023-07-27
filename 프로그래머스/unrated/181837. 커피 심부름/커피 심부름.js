function solution(order) {
    let result = 0
    
    for (let x of order) {
        if ( x === "icecafelatte" || x === "cafelatteice" || x === "hotcafelatte" || x === "cafelattehot" || x === "cafelatte") {
            result += 5000
        } else {
            result += 4500
        }
    }

    return result
}