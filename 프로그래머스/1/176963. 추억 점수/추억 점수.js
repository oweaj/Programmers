function solution(name, yearning, photo) {
    let result = []
    let temp = {};
    
    name.forEach((el, i) => {
        temp[el] = yearning[i];
    })
    
    photo.forEach((list) => {
        result.push(list.reduce((acc, item) => acc + (temp[item] || 0), 0))
    })
        
    return result;
}