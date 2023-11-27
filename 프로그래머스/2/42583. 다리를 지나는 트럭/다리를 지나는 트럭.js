function solution(bridge_length, weight, truck_weights) {
    let bridgeArr = new Array(bridge_length).fill(0)
    let time = 0
    
    while (bridgeArr.length) {
        time++
        bridgeArr.shift()
        if (truck_weights.length) {
            let total = bridgeArr.reduce((acc, el) => acc + el, 0)
            if (total + truck_weights[0] <= weight) {
                bridgeArr.push(truck_weights.shift())
            } else bridgeArr.push(0)
        }
    }
    
    return time;
}