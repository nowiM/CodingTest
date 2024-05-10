function solution(n, times) {
    let low = 0; // 한 명을 심사하는데 걸리는 최소 시간
    let high = Math.max(...times) * n; // 최대 시간
    let mid = 0; // 중간 시간
    
    //최소 시간이 최대 시간보다 작거나 같을 때 까지 반복한다.
    while(low <= high) {
        // 최소 시간과 최대 시간의 중간 시간을 구한다.
        mid = Math.floor((low + high) / 2);
        
        // 중간 시간에 심사할 수 있는 총 사람의 수를 구한다.
        const sumPerson = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);
        
        // n명보다 크면 중간 시간에 -1을 하여 최대시간에 할당한다.
        if(sumPerson >= n) {
            answer = mid;
            high = mid - 1;
        }
        // 작으면 중간 시간에 +1을 하여 최소시간에 할당한다.
        else {
            low = mid + 1;
        }
    }
    
    // 최소 시간을 리턴한다.
    return low;
}