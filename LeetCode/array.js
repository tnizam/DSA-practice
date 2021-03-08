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

var maximumWealth = function(accounts) {
    let max = 0;
    
    for(let i = 0; i < accounts.length; i++) {
        let sum = 0;
        for(let j = 0; j < accounts[i].length; j++) {
            sum += accounts[i][j];
        }
        if(sum >= max) {
            max = sum;
        }
    }
    
    return max;
};

console.log(maximumWealth([[1,5],[7,3],[3,5]]))

/*
Kids With the Greatest Number of Candies

Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

*/

var kidsWithCandies = function(candies, extraCandies) {
    let newCandyNums = {};
    let isGreater = {};
    
    for(let i = 0; i < candies.length; i++) {
        let candy = candies[i];
        let newCandies = candy + extraCandies;
        newCandyNums[i] = newCandies;
    }
    
    let extraSum = Object.entries(newCandyNums);
    
    for(let i = 0; i < candies.length; i++) {
        let sum = extraSum[i];
        
        if(i !== sum[0] && sum[1] >= candies[i]) {
            isGreater[i] = true;
        } else {
            isGreater[i] = false;
        }
    }
    
    let isGreaterArr = Object.values(isGreater);
    return isGreaterArr;
};

