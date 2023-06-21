function solution(nums) {
    let result = 0;
    
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++){
            for (let k = j + 1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                let count = 0;
                for (let x = 1; x <= sum; x++) {
                    if (sum % x === 0) count++;   
                }
                if (count === 2) result++;  // count가 2이면 1과 자신뿐으로 소수  
            }
        }
    }
    
    return result;
}