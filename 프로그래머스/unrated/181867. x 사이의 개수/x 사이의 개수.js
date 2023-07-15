function solution(myString) {   
    let split = myString.split("x")
    let result = []
    
    split.forEach((el) => result.push(el.length))
    
    return result
}