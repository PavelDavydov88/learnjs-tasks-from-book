function printList(list) {
    if (list.next == null) {
        alert(list.value)
    } else {
        alert(list.value)
        printList(list.next)
    }
}

function printListWhile(list) {
    let tempList = list;
    while (tempList.value != null) {
        alert(tempList.value);
        tempList = tempList.next;
    }
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

printList(list)
printListWhile(list)