function solution(todo_list, finished) {
    let result = []
    
    finished.forEach((el, i) => {
        !el ? result.push(todo_list[i]) : ""
    })
    
    return result;
}