function solution(my_string) {
    let numCheck = ""
    let temp = []
    
    for (let x of my_string) {
        let num = Number(x)
        if (!isNaN(num)) {
            numCheck += num  
        } else {
            numCheck !== "" ? temp.push(numCheck) : "" 
            numCheck = ""
        }
    }
    if (numCheck.length > 0) temp.push(numCheck)

    let result = 0
    for (let number of temp) {
        result += Number(number)
    }    
    
    return result
}