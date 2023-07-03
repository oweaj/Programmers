function solution(num_list) {
    let sort = num_list.sort((a, b) => a - b)
    let result = []
    
    for (let i = 5; i < sort.length; i++) {
        result.push(sort[i])
    }
    
    return result;
}