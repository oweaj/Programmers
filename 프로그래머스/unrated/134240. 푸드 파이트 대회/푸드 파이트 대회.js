function solution(food) {
    let str = ""
    let water = "0"
    
    for(let i = 1; i < food.length; i++) {
        let div = Math.floor(food[i] / 2)
        str += String(i).repeat(div)
    }
    
    let reverse = str.split("").reverse().join("")
    
    return str + water + reverse;
}