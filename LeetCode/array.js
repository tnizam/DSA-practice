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
    let sums = [];
    
    (nums.reduce((acc, n) => {
        sums.push(acc)
        return acc + n;
    }))
    
    return nums;
};