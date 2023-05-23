function solution(keyinput, board) {
    let check = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)]
    let result = [0, 0]
    
    for (let key of keyinput) {
        switch(key) {
            case "left" :
            result[0] > -check[0] ? result[0]-- : result[0]
            break;
                
            case "right" :
            result[0] < check[0] ? result[0]++ : result[0]   
            break;
                
            case "up" :
            result[1] < check[1] ? result[1]++ : result[1]   
            break;
                
            case "down" :
            result[1] > -check[1] ? result[1]-- : result[1]   
            break;
        }
    }
    
    return result
}