function solution(elements) {
    let temp = []
    let repetArr = [...elements, ...elements]
    
    for (let i = 1; i <= elements.length; i++) {
        for (let j = 0; j < elements.length; j++) {
            temp.push(repetArr.slice(j, i + j).reduce((acc, el) => acc + el, 0))
        }
    }
    
    return [...new Set(temp)].length;
}