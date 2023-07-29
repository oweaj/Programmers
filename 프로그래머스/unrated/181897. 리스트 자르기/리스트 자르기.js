function solution(n, slicer, num_list) {
    let result = []
      
    if (n === 1) {
        return num_list.slice(0, slicer[1] + 1)    
    } else if (n === 2) {
        return  num_list.slice(slicer[0])  
    } else if (n === 3) {
        return  num_list.slice(slicer[0], slicer[1] + 1)  
    } else {
        let check = num_list.slice(slicer[0], slicer[1] + 1) 
        check.forEach((el, i) => i % 2 === 0 && result.push(el))   
    }
    
    return result;
}