function solution(n) {
    let result;
    for (let i = 1; i <= 10; i++) {
        if(n < Factorial(i)) {   
            return i - 1;
        } else if (n === Factorial(i)) { 
            return i;
        }
    }
    
}

function Factorial(i) {
    let total = 1;
    for (let j = 1; j <= i; j++) {
        total *= j;
    }
    
    return total;
} 