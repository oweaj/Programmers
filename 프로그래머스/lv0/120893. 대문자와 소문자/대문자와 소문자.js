function solution(my_string) {
    let result = "";
    
    for (let x of my_string) {
        x !== x.toUpperCase() ? result += x.toUpperCase() : result += x.toLowerCase();
    }
    
    return result;
}