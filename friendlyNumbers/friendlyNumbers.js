function FriendlyNumbers(maxNum) {
    let brotherArr = [];
    let divisorsSum = new Array(maxNum + 1).fill(1);

    for (let i = 2; i <= maxNum; i++) {
        for (let j = i * 2; j <= maxNum; j += i) {
            divisorsSum[j] += i;
        }

        if (divisorsSum[i] <= maxNum && i !== divisorsSum[i] && i === divisorsSum[divisorsSum[i]]) {
            brotherArr.push([i, divisorsSum[i]]);
        }
    }

    return brotherArr;
}

console.log(FriendlyNumbers(2 ** 26));
