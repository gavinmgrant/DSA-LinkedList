const LinkedList = require('./linked-list');

const SLL = new LinkedList();

const main = () => {
    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.insertLast('Tauhida');
    SLL.remove('Husker');
    SLL.insertBefore('Athena', 'Boomer');
    SLL.insertAfter('Hotdog', 'Helo');
    SLL.insertAt('Kat', 3);
    SLL.remove('Tauhida');

    return SLL;
};

// Supplemental functions for a linked list

const display = list => {
    let currNode = list.head;
    let result = [];

    while (currNode !== null) {
        result.push(currNode.value);
        currNode = currNode.next;
    }
    
    return result;
};

const size = list => {
    let currNode = list.head;
    let counter = 0;

    while (currNode !== null) {
       counter++;
       currNode = currNode.next;
    }

    return 'List size: ' + counter;
};

const isEmpty = list => {
    if (list.head === null) {
        return true;
    } else {
        return false;
    }
};

const findPrevious = (list, item) => {
    let currNode = list.head;
    let prevNode = list.head;
    
    while ((currNode !== null) && (currNode.value !== item)) {
        prevNode = currNode;
        currNode = currNode.next;
    }

    if (currNode === null) {
        return 'Previous not found';
    } else {
        return prevNode.value;
    }
};

const findLast = list => {
    let currNode = list.head;

    if (currNode === null) {
        return 'List doesn\'t exist'
    }

    while (currNode.next !== null) {
        currNode = currNode.next;
    }

    return currNode.value;
};

main();
console.log(display(SLL));
console.log(size(SLL));
console.log(isEmpty(SLL));
console.log(findPrevious(SLL, 'Athena'));
console.log(findLast(SLL));