function solution(phone_number) {
    let result = "";
    
    for (let i = 0; i < phone_number.length; i++) {
        i < phone_number.length - 4 ? result += "*" : result += phone_number[i];
    }
    
    return result;
}