=begin
2.1 Remove Dups! Write code to remove duplicates from an unsorted linked list.
    FOLLOW UP
    How would you solve this problem if a temporary buffer is not allowed?

    Notes:
    make a set recording the numbers in the set if we want it to be O(n)
        therefore making a hashmap adding the numbers we have on the linked list
    - move the next distinct pointer to the next node
    - deleting the previous node
    - change the current node to the next distinct node
    - keep checking down the line to see the next distinct node that is not the same
=end

def remove_dups(linked_list)
    uniq_set = Set.new 
    curr_node = linked_list
    prev_node = null

    while curr_node
        if uniq_set.include?(curr_node.value)
            prev_node = curr_node.next
            curr_node = curr_node.next
        else
            uniq_set << curr_node.value
            prev_node = curr_node
            curr_node = curr_node.next
        end
    end

    return linked_list
end

=begin
    2.2 Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list

    NOTES:
    - example: find the 2/3/5th to last element of a singly linked list
    - can only go one direction  
=end

def kth_to_last(linked_list, k)
    
end