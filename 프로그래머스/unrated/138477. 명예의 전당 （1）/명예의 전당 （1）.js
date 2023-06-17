function solution(k, score) {
    let result = []
    let temp = []
    
    for (let num of score) {
        if (temp.length < k) {
            temp.push(num)
        }
        if (num > Math.min(...temp)) {
            temp.pop()
            temp.push(num)
            temp.sort((a, b) => b - a)
        }
        result.push(temp[temp.length - 1])
    }
    
    return result;
}