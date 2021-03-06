/*
Running Sum of 1d Array

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.
*/

/**
 notes:
    keep the first number in the array and keep adding down the line
 */
var runningSum = function(nums) {
    let lastNum = 0;
    
    for(let i = 0; i < nums.length; i++) {
        lastNum = lastNum + nums[i];
        sums[i] = lastNum;
    }
    
    let sumArr = Object.values(sums);
    return sumArr;
};