var longestMonotonicSubarray = function (nums) {
  let a, b;
  let incLen = 1;
  let decLen = 1;

  
  for (let i = 0; i < nums.length - 1; i++) {
    console.log("i - " );
    
    console.log("running");

    if (nums[i] < nums[i + 1]) {
      incLen += 1;
      decLen = 1;
      console.log("if");
    } else if (nums[i] > nums[i + 1]) {
      decLen += 1;
      incLen = 1;
      console.log("else");
    }
  }
  console.log(incLen, "dsf", decLen);

  return incLen > decLen ? incLen : decLen;
};

console.log(longestMonotonicSubarray([4, 3, 2, 1]));
