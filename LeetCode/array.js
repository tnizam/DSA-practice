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
        nums[i] = lastNum;
    }
    
    return nums;
};


/*
Richest Customer Wealth

You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
*/

// var maximumWealth = function(accounts) {
//     let max = 0;
    
//     for(let i = 0; i < accounts.length; i++) {
//         let sum = 0;
//         for(let j = 0; j < accounts[i].length; j++) {
//             sum += accounts[i][j];
//         }
//         if(sum >= max) {
//             max = sum;
//         }
//     }
    
//     return max;
// };

var maximumWealth = function(accounts) {
    let max = 0;
    let wealths = {};
    
    for(let i = 0; i < accounts.length; i++) {
        wealths[i] = accounts[i].reduce((acc, n) => acc + n, 0);
    }
   
    let maxWealth = Object.entries(wealths).reduce((acc, n) => {
        if(acc === 0 || acc < n[1]) {
            return n[1];
        } else if(acc >= n[1]) {
            return acc;
        }
    }, 0)
    
    return maxWealth;
};

console.log(maximumWealth([[1,5],[7,3],[3,5]]))