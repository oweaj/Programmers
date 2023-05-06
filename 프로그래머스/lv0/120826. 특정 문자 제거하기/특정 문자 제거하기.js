function solution(my_string, letter) {
    let result = [];
    
    for (let word of my_string) {
        if (word !== letter) {
            result.push(word);
        }
    }
    
    return result.join("");
}