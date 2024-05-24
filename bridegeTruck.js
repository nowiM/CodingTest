function solution(bridge_length, weight, truck_weights) {
    // 다리의 길이 만큼 배열을 생성한다.
    let crossingTruck = new Array(bridge_length).fill(0);
    let bridgeSum = 0;
    let time = 0;
    
    // 맨 처음 트럭을 다리에 올린다.
    time++;
    crossingTruck.shift();
    bridgeSum = truck_weights[0];
    crossingTruck.push(truck_weights.shift());
    
    // 대기 중인 트럭이 남아있거나, 다리 위에 올라간 트럭이 남아 있는 동안 반복한다.
    while(bridgeSum > 0) {
        time++;
        
        // 현재 시점의 다리의 무게에 다리 위에 올라간 트럭 배열의 첫 번째 요소값을 뺀다.(큐)
        bridgeSum -= crossingTruck.shift();
        
        // 현재 시점의 다리 무게와 다음 트럭의 무게를 더해도 다리가 버틴다면
        if(truck_weights.length > 0 && bridgeSum + truck_weights[0] <= weight) {
            bridgeSum += truck_weights[0];
            crossingTruck.push(truck_weights.shift());
        }
        // 버티지 못하면 0을 푸쉬한다. 
        else {
            crossingTruck.push(0);
        }
    }
    // 경과 시간을 리턴한다.
    return time;
}