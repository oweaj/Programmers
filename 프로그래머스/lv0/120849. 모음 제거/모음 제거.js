function solution(my_string) {
    let alphabet = ["a", "e", "i", "o", "u"];
    let str = "";
    
    for (let x of my_string) {
        if (!alphabet.includes(x)) {
            str += x;
        }
    }
    
    return str;
}