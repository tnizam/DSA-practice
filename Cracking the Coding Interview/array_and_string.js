// Chapter 1: Array and string problems

// Is Unique: Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional data structures?

// notes:
// make sure character does not show up in the rest of the string 

function isUnique(string) {
    for(let i = 0; i < string.length; i++) {    // n
        let char = string[i];                   // 1
        let newString = string.slice(i + 1);    // n

        if(newString.includes(char)) {          // n
            return false;
        }
    }    
    return true;
} 

// time complexity: n(1 + n + n) = n(1 + 2n) = n + 2n^2 = n^2
// this is not the best time complexity, so try a different method.

function isUniqueChar(str) {
    let hash = {};                          // 1
    for(let i = 0; i < str.length; i++) {   // n
        let char = str[i];                  // 1
        if(hash[char]) {                    // 1
            return false;
        } else {
            hash[char] = true;              // 1
        }
    }

    return true;
}

// console.log(isUniqueChar("stre"))

// time complexity: O(1 + n(1 + 1 + 1)) = 1 + 3n = n === 0(n)

//-----------------------------------------------------------------------------

// Check Permutation: Given two strings, write a method to decide 
// if one is a permutation of the other. 

// note: same letters but different order

function permutation(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }

    let hash1 = {};
    let hash2 = {};

    for(let i = 0; i < str1.length; i++) {
        let char1 = str1[i];
        let char2 = str2[i];

        if(hash1[char1]) {
            hash1[char1] += 1;
        } else {
            hash1[char1] = 1;
        }

        if(hash2[char2]) {
            hash2[char2] += 1;
        } else {
            hash2[char2] = 1;
        }
    }

    for(let key in hash1) {
        if(hash1[key] !== hash2[key]) {
            return false;
        }
    }

    return true;
}

// console.log(permutation("hello", "ellloh"))

// simplier solution

function permutation2(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }

    let hash = {};

    for(let i = 0; i < str1.length; i++) {
        if(hash[str1[i]]){
            hash[str1[i]] += 1;
        } else {
            hash[str1[i]] = 1;
        }
    }

    for(let i = 0; i < str2.length; i++) {
        let char = str2[i];

        if(hash[char] && hash[char] !== 0) {
            hash[char] -= 1;
        } else {
            return false;
        }
    }

    return true;
}

// this is a different way to approach the problem
// time complexity = O(n)

// -----------------------------------------------------------------------------

// URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the "true"
// length of the string. (Note: If implementing in Java, please use a character array so that you can
// perform this operation in place.) 

// replace all spaces with '%20' 
// the true length of the string is given
// subtract chars in the string without space from true length to see how many spaces we are allowed to replace

function URLify(str, num) {
    let newStr = "";
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        if(char !== " ") {
            count ++;
        }

    }
    
    let space = num - count;

    for(let i = 0; i < str.length; i++) {
        let char = str[i];

        if(char === " " && space > 0) {
            newStr += "%20";
            space -= 1;
        } else if(char !== " "){
            newStr += char;
        }
    }
    
    return newStr
}

console.log(URLify("hel lo", 5))