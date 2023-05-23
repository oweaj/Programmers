function solution(dots) {
    let row = dots.map(arr => arr[0])
    let column = dots.map(arr => arr[1])
    
    let width = Math.max(...row) - Math.min(...row)
    let height = Math.max(...column) - Math.min(...column)

    return width * height;
}