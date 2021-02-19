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

console.log(isUniqueChar("stre"))

// time complexity: O(1 + n(1 + 1 + 1)) = 1 + 3n = n === 0(n)

