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

class Node
    attr_accessor :value
    attr_accessor :next
end

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
    current_node = linked_list
    length = 0

    while current_node != null 
        current_node = current_node.next
        length += 1
    end

    num = length - k
    current_node = linked_list
    num.each do |i| 
        current_node = current_node.next
    end

    return current_node
end

=begin
    2.3 Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.
    EXAMPLE
    lnput:the node c from the linked list a->b->c->d->e->f
    Result: nothing is returned, but the new linked list looks like a->b->d->e->f

    Notes
    - has to be greater then two
    - can be any middle number
=end

def delmid(linkedList)
    curr = linkedList
    count = 0

    while curr != null
        count += 1
        curr = curr.next
    end
end