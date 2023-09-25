function solution(myStr) {
    let result = []
    let check = myStr.split(/[abc]/)
    
    for (let x of check) {
        if (x.length) result.push(x)
    }
    
    return result.length ? result : ["EMPTY"]
}