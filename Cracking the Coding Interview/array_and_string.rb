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

puts(is_unique("stre"))