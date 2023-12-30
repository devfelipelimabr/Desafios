function maxSubarraySum(arr) {
  if (arr.length === 0) {
      return {
          sum: 0,
          subarray: []
      };
  }

  let currentSum = arr[0];
  let maxSum = arr[0];
  let subarrayStart = 0;
  let bestSubarrayStart = 0;
  let bestSubarrayEnd = 0;

  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > currentSum + arr[i]) {
          currentSum = arr[i];
          subarrayStart = i;
      } else {
          currentSum = currentSum + arr[i];
      }

      if (currentSum > maxSum) {
          maxSum = currentSum;
          bestSubarrayStart = subarrayStart;
          bestSubarrayEnd = i;
      }
  }

  return {
      sum: maxSum,
      subarray: arr.slice(bestSubarrayStart, bestSubarrayEnd + 1)
  };
}

// Example usage:
let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let result = maxSubarraySum(array);
console.log("The maximum subarray sum is:", result.sum); // Result: 6
console.log("The subarray with maximum sum is:", result.subarray); // Result: [4, -1, 2, 1]
