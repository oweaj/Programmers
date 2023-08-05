function solution(my_string, queries) {
    
    queries.forEach((el) => {
        let arr = [...my_string]
        let check = arr.slice(el[0], el[1] + 1).reverse().join("")
        arr.splice(el[0], el[1] - el[0] + 1, check)
        my_string = arr.join("")
    })
    
    return my_string
}