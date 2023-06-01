function solution(nums) {
    let poketmon = [...new Set(nums)]
    
    return poketmon.length > nums.length / 2 ? nums.length / 2 : poketmon.length
}