function solution(rsp) {
    let result = "";
    
    for (let num of rsp) {
       result += num === "2" ? "0" : num === "0" ? "5" : "2"
    }
 
    return result
}