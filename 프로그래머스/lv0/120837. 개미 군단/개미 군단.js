function solution(hp) {
    let antArr = [5,3,1];
    let count = 0;
    
    for (let ant of antArr) {
        if (hp >= ant) {  
            count += Math.floor(hp / ant);
            hp -= Math.floor(hp / ant) * ant
        }
    }
    
    return count;
}