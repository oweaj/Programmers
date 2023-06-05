function solution(answers) {  
    let userPick= [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]]
    let count = [0,0,0]
    let result = []
    
    answers.forEach((el, i) => {  
        el === userPick[0][i % userPick[0].length] && count[0]++
        el === userPick[1][i % userPick[1].length] && count[1]++
        el === userPick[2][i % userPick[2].length] && count[2]++
    });
    
    let max = Math.max(...count);
    
    for (let i = 0; i < count.length; i++) {       
        if (count[i] === max) result.push(i + 1)  
    }
    
    return result;
}