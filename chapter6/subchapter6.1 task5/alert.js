function printList(list) {
    if (list.next != null) {
        printList(list.next)
        alert(list.value)
    } else {
        alert(list.value)

    }
}

function printListWhile(list) {
    let arr = [];
    let tempList = list;
    while (tempList !== null) {
        arr.push(tempList.value)
        tempList = tempList.next;
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        alert( arr[i] );
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