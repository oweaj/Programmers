function solution(picture, k) {
    let result = []
    
    picture.forEach((el) => {
        let str = ""
        for (let x of el) {
            str += x.repeat(k)
        }
        for (let i = 0; i < k; i++) {
            result.push(str)
        }
    })
    
    return result
}