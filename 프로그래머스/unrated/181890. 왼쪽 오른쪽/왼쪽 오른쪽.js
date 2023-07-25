function solution(str_list) {
    let check = str_list.findIndex((el) => el === "l" || el === "r")
    
    if(str_list[check] === "l") {
        return str_list.slice(0, check)
    } else if(str_list[check] === "r") {
        return str_list.slice(check + 1)
    } else {
        return []
    }
}