function solution(name, yearning, photo) {
    let result = []
    let temp = {};
    
    name.forEach((el, i) => {
        temp[el] = yearning[i];
    })
    
    photo.forEach((list) => {
        let sum = 0
        for (let x = 0; x < list.length; x++) {
            if (temp[list[x]]) {
                sum += temp[list[x]]
            }
        }
        result.push(sum)
    })
        
    return result;
}