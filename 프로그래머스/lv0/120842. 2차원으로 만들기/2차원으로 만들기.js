function solution(num_list, n) {
    let result = [];
    let temp = [];
    
    for (let num of num_list) {
        temp.push(num)

        if (temp.length === n) {
            result.push(temp)
            temp = []            
        }
    }

    return result
}