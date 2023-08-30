function solution(common) {
    let result = 0
    let check = (common[1] - common[0]) === (common[2] - common[1])
    let endNum = common[common.length - 1]
    
    result = check ? endNum + common[1] - common[0] : endNum * common[1] / common[0]
    
    return result;
}