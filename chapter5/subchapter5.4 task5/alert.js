function getMaxSubSum(arr) {

  let maxSum = 0;
  let temporarySum = 0;

  for (let a of arr) { 
    temporarySum += a; 
    maxSum = Math.max(maxSum, temporarySum); 
    if (temporarySum < 0) temporarySum = 0; 
  }

  return maxSum;
}

alert( getMaxSubSum([-1, 1, -1, 1, -1]) );
alert( getMaxSubSum([-1, 1, -1, 1, -1, 1]) );