function solution(age) {
    let alphabet = ["a","b","c","d","e","f","g","h","i","j"];
    let result = "";
    
    for (x of String(age)) {
        result += alphabet[Number(x)]
    }
    
    return result;
}