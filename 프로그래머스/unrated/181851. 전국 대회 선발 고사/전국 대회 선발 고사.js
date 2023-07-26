function solution(rank, attendance) {
    let trueGroup = []
    rank.forEach((el, i) => {if(attendance[i]) trueGroup.push(rank[i])})
    
    trueGroup.sort((a, b) => a - b)
    
    return 10000 * rank.indexOf(trueGroup[0]) + 100 * rank.indexOf(trueGroup[1]) + rank.indexOf(trueGroup[2])
}