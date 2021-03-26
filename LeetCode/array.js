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

/*
Count Items Matching a Rule

You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:

ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.
Return the number of items that match the given rule.
*/

var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    
    for(let i = 0; i < items.length; i++) {
        
        if(ruleKey === "type" && ruleValue === items[i][0]) {
            count += 1;
        } else if(ruleKey === "color" && ruleValue === items[i][1]) {
            count += 1;
        } else if(ruleKey === "name" && ruleValue === items[i][2]) {
            count += 1;
        }
    }
    
    return count;
};

/*
1365. How Many Numbers Are Smaller Than the Current Number

Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.
*/
var smallerNumbersThanCurrent = function(nums) {
    let min = [];
    let count = 0;
    
    for(let i = 0; i < nums.length; i++) {
        
        for(let j = 0; j < nums.length; j++) {
            if(nums[j] < nums[i]) {
                count += 1;
            }
        }
        min.push(count);
        count = 0;
    }
    
    return min;
};

/*
1086. High Five

Given a list of the scores of different students, items, where items[i] = [IDi, scorei] represents one score from a student with IDi, calculate each student's top five average.

Return the answer as an array of pairs result, where result[j] = [IDj, topFiveAveragej] represents the student with IDj and their top five average. Sort result by IDj in increasing order.

A student's top five average is calculated by taking the sum of their top five scores and dividing it by 5 using integer division.

*/

var highFive = function(items) {
    let avg = [];
    let students = {};
    
    // this records each students length
    
    for(let i = 0; i < items.length; i++) {
        let student = items[i];
        
        if(students[student[0]]) {
            students[student[0]].push(student[1]);
        } else {
            students[student[0]] = [student[1]];
        }
    }
    
    for(let key in students) {
        let scores = students[key];
        if(scores.length <= 5) {
            let sum = scores.reduce((a, b) => a + b, 0);
            let average = Math.floor(sum/scores.length);
            avg.push([key, average])
        } else {
            scores.sort((a, b) => b-a); // showing from highest to lowest
            let sum = scores.slice(0,5).reduce((a, b) => a + b, 0);
            let average = Math.floor(sum/5);
            avg.push([key, average]);
        }
    }
    
    return avg;
};

// let list = [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]];

// console.log(highFive(list));


/*
905. Sort Array By Parity

Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

*/

var sortArrayByParity = function(A) {
    let even = [];
    let odd = [];
    
    for(let i = 0; i < A.length; i++){
        if(A[i] % 2 === 0) {
            even.push(A[i]);
        } else {
            odd.push(A[i]);
        }
    }
    
    return even.concat(odd);
};

/*
977. Squares of a Sorted Array

Share
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
*/

var sortedSquares = function(nums) {
    let squared = [];
    
    for(let i = 0; i < nums.length; i++){
        squared.push(Math.pow(nums[i], 2));
    }
    
    return squared.sort((a, b) => a-b);
};

/*
1002. Find Common Characters

Share
Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.
*/

var commonChars = function(A) {
    let dups = [...A[0]];
    
    for(let i = 1; i < A.length; i++) {
        
        dups = dups.filter(letter => {
            let length = A[i].length
            A[i] = A[i].replace(letter, "")
            
            return length > A[i].length
        })
    }
    
    return dups;
};

/*
509. Fibonacci Number

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).
*/

var fib = function(n) {
    let map = {0:0, 1:1};
    
    for(let i = 2; i <= n; i++) {
        map[i] = map[i - 1] + map[i - 2];
    }
    
    return map[n]
};

/*
1200. Minimum Absolute Difference

Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements. 

Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

a, b are from arr
a < b
b - a equals to the minimum absolute difference of any two elements in arr
*/

var minimumAbsDifference = function(arr) {
    let min = [];
    let minDiff = null;
    arr.sort((a, b) => a-b);
    
    for(let i = 0; i < arr.length; i++) {
        let diff = Math.abs(arr[i] - arr[i + 1]);
        if(minDiff === null || diff < minDiff) {
            minDiff = diff;
        }
    }
    
    // since it is sorted in order so dont have to loop through it twice
    // and the integers in the arr are all distinct!!
    
    for(let i = 0; i < arr.length; i++) {
        let diff = Math.abs(arr[i] - arr[i + 1]);
        
        if(diff === minDiff) {
            min.push([arr[i], arr[i + 1]]);
        }
    }
    
    return min;
};

/*
1413. Minimum Value to Get Positive Step by Step Sum

Given an array of integers nums, you start with an initial positive value startValue.

In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).

Return the minimum positive value of startValue such that the step by step sum is never less than 1.
 */

var minStartValue = function(nums) {
    let startVal = 1;
    let sum = startVal;
    
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        
        if(sum < 1) {
            startVal += 1;
            sum = startVal;
            i = -1;
            continue;
        }
    }
    
    return startVal;
};

var minStartVal = function(nums) {
    var stv = (min = 0);
    // console.log(min)
   nums.map((x) => (min = Math.min(min, (stv += x))));
//    console.log(stv)
   return 1 - min;
 };

 let nums = [-3,2,-3,4,2];

//  console.log(minStartVal(nums));

/*
243. Shortest Word Distance

Given an array of strings wordsDict and two different strings that already exist in the array word1 and word2, return the shortest distance between these two words in the list.
*/

var shortestDistance = function(wordsDict, word1, word2) {
    let dist1 = null;
    let dist2 = null;
    let min = Infinity;
    
    for(let i = 0; i < wordsDict.length; i++) {
        if(wordsDict[i] === word1) {
            dist1 = i;
        } else if(wordsDict[i] === word2) {
            dist2 = i;
        }
        
        if(dist1 !== null && dist2 !== null) {
            min = Math.min(min, Math.abs(dist1 - dist2));
        }
    }
    
    return min;
};

/*
169. Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/

var majorityElement = function(nums) {
    let numCount = {};
    let ele = null;
    
    for(let i = 0; i < nums.length; i++) {
        if(numCount[nums[i]]) {
            numCount[nums[i]] += 1;
        } else {
            numCount[nums[i]] = 1;
        }
        
        if(numCount[nums[i]] >= (nums.length/2)) {
            ele = nums[i];
        }
    }
    
    return ele;
};

// 1629. Slowest Key

var slowestKey = function(releaseTimes, keysPressed) {
  
    let longest = releaseTimes[0];
    let longestKey = [keysPressed[0]];
    
    for(let i = 1; i < keysPressed.length; i++) {
        let diff = releaseTimes[i] - releaseTimes[i - 1];
        
        if(diff === longest) {
            longestKey.push(keysPressed[i]);
        } else if(diff > longest) {
            longest = diff;
            longestKey = [keysPressed[i]];
        }
    }
    
    longestKey.sort();
    
    return longestKey[longestKey.length - 1];
};

// 122. Best Time to Buy and Sell Stock II

// var maxProfit = function(prices) {
//     let profit = 0;
    
//     for(let i = 0; i < prices.length - 1; i++) {
//         let possible = prices[i + 1] - prices[i];
//         profit = Math.max(profit, profit + possible);
//     }
    
//     return profit;
// };

var maxProfit = function(prices) {
    let profit = 0;
    
    for(let i = 0; i < prices.length - 1; i++) {
        if(prices[i + 1] > prices[i]) {
            profit += prices[i + 1] - prices[i];
        }
    }
    
    return profit;
};

// 283. Move Zeroes

var moveZeroes = function(nums) {
    let len = nums.length;
    
    for(let i = 0; i < len; i++){
        if(nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            i = i - 1;
            len--;
        }
    }
    
    return nums;
};

// 896. Monotonic Array

var isMonotonic = function(A) {
    let increase = true;
    let decrease = true;
    
    for(let i = 0; i < A.length - 1; i++) {
        if(A[i] < A[i + 1]) {
            increase = false;
        } else if(A[i] > A[i + 1]) {
            decrease = false;
        }
    }
    
    return increase || decrease;
};

// 217. Contains Duplicate

var containsDuplicate = function(nums) {
    let charCount = {};
    
    for(let i = 0; i < nums.length; i++) {
        if(charCount[nums[i]]){
            charCount[nums[i]] += 1;
            return true;
        } else {
            charCount[nums[i]] = 1;
        }
    }
    
    return false;
};

// or 

var containsDuplicate = function(nums) {
    let set = new Set(nums);
    
    return set.size < nums.length;
};

// 448

var findDisappearedNumbers = function(nums) {
    let set = new Set(nums);
    let missing = [];
    
    for(let i = 1; i <= nums.length; i++) {
        if(!set.has(i)) {
            missing.push(i);
        }
    }
    
    return missing;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))