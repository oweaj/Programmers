function solution(s) {
    let temp = [];
    let count = 0
    
    for (let i = 0; i < s.length; i++) {    
        let move = s.slice(i) + s.slice(0, i);
        let check = true
        for (let item of move) {
            if (item === "(" || item === "[" ||  item === "{") {
                temp.push(item)
            } else {
                let last = temp.pop()
                if ((item === ")" && last === "(") || (item === "]" && last === "[") || (item === "}" && last === "{")) continue
                check = false
                break
            }   
        }   
        check && count++
    }
    return s.length % 2 ? 0 : count
}