function solution(A,B){
    let a = A.sort((a, b) => a - b);
    let b = B.sort((a, b) => b - a);

    return a.reduce((acc, el, i) => acc + el * b[i], 0)
}