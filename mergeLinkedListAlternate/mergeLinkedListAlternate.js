/* Merge two Linked Lists at alternating positions

Objective: Given two linked lists, merge one list into another at alternate positions, if second link list has extra nodes, print them as well

Example:

5 -> 10 -> 15 -> 20 ->25 -> null
3 -> 6 ->9 -> 12 ->15 ->18 ->21 -> null

Output :
5 -> 3 -> 10 -> 6 ->15 -> 9 -> 20 -> 12 -> 25 ->15 -> null
Remaining List : 18 -> 21 -> null
*/

class Node {
  constructor(d) {
      this.val = d;
      this.next = null;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
  }

  add(d) {
      var end = new Node(d);
      var current;
      if (this.head === null) {
          this.head = end;
      } else {
          current = this.head;
          while (current.next) {
              current = current.next;
          }
          current.next = end;
      }
  }
}

var list1 = new LinkedList();
var list2 = new LinkedList();

list1.add(5);
list1.add(10);
list1.add(15);
list1.add(20);
list1.add(25);
list2.add(3);
list2.add(6);
list2.add(9);
list2.add(12);
list2.add(15);
list2.add(18);
list2.add(21);

function mergeLinkedListAlternate(LL1, LL2) {
  let result = {};
  let leftover;
  if (!LL1 && !LL2) {
    return null;
  } else {
    result.head = 
    while (LL1 && LL2) {
      result.val = LL1.val;
      result.next = LL2;
      LL1 = LL1.next;
      LL2 = LL2.next;
    }
    if (LL1) {
      leftover = LL1;
    } else {
      leftover = LL2;
    }
  }
  return result, leftover;      
};

console.log(list1, list2);