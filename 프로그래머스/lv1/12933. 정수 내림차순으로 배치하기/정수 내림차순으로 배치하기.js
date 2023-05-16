function solution(n) {
    let str = n.toString().split("").sort((a,b) => b-a).join("")
    
    return Number(str)
}