function solution(s) {
    let stack = []
    
    for (let x of s) {
        stack.at(-1) === x ? stack.pop() : stack.push(x)
    }

    return stack.length ? 0 : 1
}