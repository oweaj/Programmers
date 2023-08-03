function solution(my_string, overwrite_string, s) {
    let newArr = my_string.split("")
    
    newArr.splice(s, overwrite_string.length, overwrite_string)    

    return newArr.join("")
}