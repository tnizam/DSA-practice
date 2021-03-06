/*
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
*/

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeDups(linkedList) {
    let dupSet = new Set();
    let currentNode = linkedList;
    let prevNode = null;

    while(currentNode) {
        if(dupSet.has(currentNode.value)) {
            // if it has the value
            // inorder to ensure skipping that node we will set prev.next to curr.next
            // as well as setting curr to curr.next
            // this will skip to next

            prevNode.next = currentNode.next;
            currentNode = currentNode.next;
        } else {
            dupSet.add(currentNode.value);
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
    }

    return linkedList;
}

/*
    2.2 Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list

    NOTES:
    - example: find the 2/3/5th to last element of a singly linked list
    - can only go one direction
*/

function kthToLast(linkedList, k) {
    let length = 0;
    let currentNode = linkedList;

    while(currentNode !== null) { 
        length += 1;
        currentNode = currentNode.next;
    }

    let nodeNum = length - k;
    currentNode = linkedList;

    for(let i = 0; i < nodeNum; i++) {
        currentNode = currentNode.next; 
    }

    return currentNode;
}

/*
    2.3 Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.
    EXAMPLE
    lnput:the node c from the linked list a->b->c->d->e->f
    Result: nothing is returned, but the new linked list looks like a->b->d->e->f

    Notes
    - has to be greater then two
    - can be any middle number
*/

function deleteMidNode(linkedList) {
    let curr = linkedList;
    let count = 0;

    while(curr !== null) {
        count += 1;
        curr = curr.next;
    }

    if (count <= count) {
        return linkedList
    }

    let mid = Math.floor(count/2);
    curr = linkedList;

    for(let i = 0; i < mid; i++) {
        curr = curr.next; 
    }
    
    return curr;
}

/*
    2.4 Partition: Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. If x is contained within the list, the values of x only need to be after the elements less than x (see below). The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions.

    EXAMPLE
    Input:
        3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition= 5]
    Output:
        3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

    NOTES
    - all node < x --- come before ---- all nodes >= x

*/