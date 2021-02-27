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


