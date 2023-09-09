function solution(my_string, s, e) {
    
    let split = my_string.split("")
    let check = split.slice(s, e + 1).reverse().join("")
    let result = split.splice(s, e - s + 1, check)
    
    return split.join("");
}