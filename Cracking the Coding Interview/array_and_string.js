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

// console.log(URLify("hel lo", 5))

// ------------------------------------------------------------------------------

// Palindrome Permutation: Given a string, write a function to check if it is a permutation 
// of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation
// is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words

// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat", "atco cta", etc.)

// REMEMBER: permutation OF A palindrome!! 

function paliPerm(str) {
    let hash = {};
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        let char = str[i];

        if(char === " ") {
            continue; 
        }

        if(hash[char]) {
            delete hash[char];
        } else {
            hash[char] = true;
        }
        count += 1;
    }

    if(count % 2 === 0) {
        return Object.keys(hash).length === 0;
    } else {
        return Object.keys(hash).length === 1;
    }

}

// console.log(paliPerm("aabcbcde"))

// -----------------------------------------------------------------------

// One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away. 

// EXAMPLE
// pale, ple -> true
// pales, pale -> true
// pale, bale -> true
// pale, bake -> false 

function oneAway(str1, str2) {
    let edit = 1;
    let long = str1.length > str2.length ? str1 : str2;
    let short = str1.length < str2.length ? str2 : str1;
    let maxLen = Math.max(str1.length, str2.length);
    let diff = long.length - short.length;

    // if there is more then one edit done return false.
    if(diff > edit) {
        return false;
    }

    for(let i = 0, j = 0; i < maxLen || j < maxLen; i++ , j++){
        let char1 = str1[i];
        let char2 = str2[j];

        if(char1 !== char2) {
            edit--;
            if(edit < 0) {  // if there is edit less then 0 means there is more then one
                return false;   // edit
            }
            if(char1 === str2[j + 1]) { // inserted
                j++;
            } else if(str2[i + 1] === char2) { //removed
                i++;
            }
        }
    }
    return true;
}