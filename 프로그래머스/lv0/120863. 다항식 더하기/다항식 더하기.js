function solution(polynomial) {
    let split = polynomial.split(" + ");
    let xStr = 0;
    let num = 0;
    let result = "";
    
    for (let str of split) {
        if (str.includes("x")) {
            let x = str.split("x")
            x[0] === "" ? xStr++ : xStr += Number(x[0])
        } else {
            num += Number(str)
        }
    }
    
    if (xStr > 0 && xStr !== 1) {
        result += `${xStr}x`
    } else if (xStr === 1) {
        result += "x"
    }
   
    if (xStr === 0 && num > 0) {
        result += num
    } else if (num > 0) {
        result += ` + ${num}`
    }
    
    return result;
}