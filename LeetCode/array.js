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

// console.log(maximumWealth([[1,5],[7,3],[3,5]]))

/*
Kids With the Greatest Number of Candies

Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

*/

var kidsWithCandies = function(candies, extraCandies) {
    let isGreater = {};
    let largest = 0;
    
    for(let i = 0; i < candies.length; i++) {
        if(candies[i] >= largest) {
            largest = candies[i];
        }
    }
    
    for(let i = 0; i < candies.length; i++) {
        let sum = candies[i] + extraCandies;
        if(sum >= largest) {
            isGreater[i] = true;
        } else {
            isGreater[i] = false;
        }
    }
    
    let arr = Object.values(isGreater);
    return arr;
};

/*
Shuffle the Array

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].
*/

var shuffle = function(nums, n) {
    let half = nums.length / 2;
    let newArr = [];
    
    for(let i = 0; i < half; i += 1) {
        newArr.push(nums[i], nums[n + i]);
    }
    
    return newArr;
};

/*
Number of Good Pairs

Given an array of integers nums.

A pair (i,j) is called good if nums[i] == nums[j] and i < j.

Return the number of good pairs.
*/

var numIdenticalPairs = function(nums) {
    let good = 0;
    
    for(let i = 0; i < nums.length; i++) {
        
        for(let j = i+1; j < nums.length; j++) {
            
            if(nums[i] === nums[j]) {
                good += 1;
            }
        }
    }
    
    return good;
};