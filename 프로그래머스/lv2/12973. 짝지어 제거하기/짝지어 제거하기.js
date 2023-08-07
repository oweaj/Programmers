function solution(s) {
    let temp = []
    
    for (let x of s) {
        if(temp[temp.length - 1] === x) {
            temp.pop()
        } else {
            temp.push(x)    
        }
    }

    return temp.length ? 0 : 1
}