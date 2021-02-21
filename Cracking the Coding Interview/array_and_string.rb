=begin
 Chapter 1: Array and string problems

 Is Unique: Implement an algorithm to determine if a string has all unique characters. 
 What if you cannot use additional data structures?

=end

def is_unique(str) 
    hash = {}

    str.each_char do |char| 
        if hash[char]
            return false
        else
            hash[char] = true
        end
    end

    return true
end

# puts(is_unique("stre"))

# //-----------------------------------------------------------------------------

# // Check Permutation: Given two strings, write a method to decide 
# // if one is a permutation of the other. 

# // note: same letters but different order

def check_perm(str1, str2)
    if str1.length != str2.length
        return false
    end

    hash1 = Hash.new(0)
    hash2 = Hash.new(0)

    str1.each_char do |char|
        hash1[char] += 1
    end

    str2.each_char do |char|
        hash2[char] += 1
    end

    hash1.each do |key, value| 
        if(hash1[key] != hash2[key])
            return false
        end
    end

    return true;
end

# puts(check_perm("hello", "elwoh"))

# ---------------------------------------------------------------------------

# // URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string. (Note: If implementing in Java, please use a character array so that you can perform this operation in place.) 

# // replace all spaces with '%20' 
# // the true length of the string is given
# // subtract chars in the string without space from true length to see how many spaces we are allowed to replace

def URLify(str, num)
    new_str = ""
    count = 0

    # first count how many characters there are without spaces
    str.each_char do |char|
        if char != " "
            count += 1
        end
    end

    # find the difference between the non space char and given true length

    spaces = num - count

    str.each_char do |char| 
        if char === " " && spaces > 0
            new_str += "%20"
            spaces -= 1
        elsif char != " "
            new_str += char
        end
    end

    return new_str
end

puts(URLify("hel lo", 6))