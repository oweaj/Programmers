function solution(board, moves) {
    let stack = []
    let count = 0
    
    moves.forEach((el) => {
        for (let i = 0; i < board.length; i++) {
            if (board[i][el - 1] !== 0) {
                let item = board[i][el - 1]
                board[i][el - 1] = 0
                if (item === stack.at(-1)) {
                    stack.pop()
                    count += 2
                } else {
                    stack.push(item)
                }  
                break
            }
        }
    })

    return count
}