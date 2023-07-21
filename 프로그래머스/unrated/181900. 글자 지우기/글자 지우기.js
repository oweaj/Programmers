function solution(my_string, indices) {
    let split = my_string.split("")
    let result = ""
    
    split.forEach((el, i) => {
        if (!indices.includes(i)) result += el
    })
        
    return result;
}