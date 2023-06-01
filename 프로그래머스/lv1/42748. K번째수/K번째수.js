function solution(array, commands) {
    let result = []
    
    for (let i = 0; i < commands.length; i++) {
        let item = commands[i]
        let arr = array.slice(item[0] - 1, item[1]).sort((a, b) => a - b)
        result.push(arr[item[2] - 1])    
    }
    
    return result;
}
    
    
