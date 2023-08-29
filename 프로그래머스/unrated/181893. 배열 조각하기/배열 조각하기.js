function solution(arr, query) {
    
    query.forEach((el, i) => {
        if (i % 2) arr.splice(0, el)
        else arr.splice(el + 1) 
    })

    return arr;
}