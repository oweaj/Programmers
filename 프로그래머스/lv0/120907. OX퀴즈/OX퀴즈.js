function solution(quiz) {
    let result = [];
    
    for (let i = 0; i < quiz.length; i++) {
        let split = quiz[i].split(" ")
        let firstNum = Number(split[0])
        let symbol = split[1]
        let secondNum = Number(split[2])
        let total = Number(split[4])
        
        let check = symbol === "+" ? firstNum + secondNum : firstNum - secondNum
        
        check === total ? result.push("O") : result.push("X")    
    }

    return result;
}