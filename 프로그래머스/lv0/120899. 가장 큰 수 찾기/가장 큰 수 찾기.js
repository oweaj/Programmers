function solution(array) {
    let arr1 = Math.max(...array);
    let arr2 = array.indexOf(arr1);
    
    return [arr1, arr2];
}