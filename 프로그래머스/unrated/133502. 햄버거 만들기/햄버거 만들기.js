function solution(ingredient) {
    let temp = []
    let count = 0
    
    for (let x of ingredient) {
        temp.push(x)
        
        if (temp.length >= 4) {
            let check = temp.slice(-4).join("")
            if (check === "1231") {
                count++
                temp.splice(-4)
            }
        }
        
    }
        
    return count;
}