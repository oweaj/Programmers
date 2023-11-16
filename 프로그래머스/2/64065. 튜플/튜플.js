function solution(s) {
    let result = []
    let check = s.replace("{{", "").replace("}}","").split("},{").sort((a, b) => a.length - b.length)
    let checkArr = []
    
    check.forEach((el) => checkArr.push(el.split(",")))
    
    checkArr.forEach((el) => {
        for (let x of el) {
            if (!result.includes(Number(x))) result.push(Number(x))
        }
    })
    
    return result;
}