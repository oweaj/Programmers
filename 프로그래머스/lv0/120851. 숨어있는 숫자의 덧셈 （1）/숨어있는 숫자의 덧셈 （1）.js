function solution(my_string) {
    let result = 0;
    
    for (x of my_string) {
        if (!isNaN(x)) {
            result += Number(x);
        }
    }
    
    return result;
}