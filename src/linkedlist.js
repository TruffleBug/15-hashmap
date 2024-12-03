class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.nextNode = null;
    }
};

class LinkedList {
    constructor() {
        this.head = null;
    }

    // add to end
    append(key, value) {
        const newNode = new Node(key, value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = newNode;
    }

    // add to beginning
    prepend(key, value) {
        const newNode = new Node(key, value);
        if (!this.head) {
            this.head = newNode;
            return;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
    }

    // return number of nodes
    size() {
        let current = this.head;
        let count = 0;
        while (current) {
            count++;
            current = current.nextNode;
        }
        return count;
    }

    // returns first node key
    headNode() {
        if (!this.head) return 'No nodes in list';
        return this.head.key;
    }

    // returns last node key
    tail() {
        if (!this.head) return 'No nodes in list';

        let current = this.head;
        while (current.nextNode) {
            current = current.nextNode;
        }
        return current.key;
    }

    // returns key at given index
    at(index) {
        if (index < 0) return 'Invalid index';
        else if (!this.head) return 'No nodes in list';

        let current = this.head;
        let currentIndex = 0;
        while (current) {
            if (currentIndex == index) return current.key;
            current = current.nextNode;
            currentIndex++;
        }
    }

    // returns value at given index
    atValue(index) {
        if (index < 0) return 'Invalid index';
        else if (!this.head) return 'No nodes in list';

        let current = this.head;
        let currentIndex = 0;
        while (current) {
            if (currentIndex == index) return current.value;
            current = current.nextNode;
            currentIndex++;
        }
    }

    // removes last node
    pop() {
        if (!this.head) return 'No nodes in list';

        let current = this.head;
        while (current.nextNode.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = null;
    }

    // returns true if key exists in list, otherwise false
    contains(key) {
        if (!this.head) return 'No nodes in list';

        let current = this.head;
        if (current.key === key) return true;
        while (current.nextNode) {
            current = current.nextNode;
            if (current.key === key) return true;
        }
        return false;
    }

    // returns true if key exists in list, otherwise false RECURSIVELY
    containsRECURSIVE(key, current = this.head) {
        if (!this.head) return 'No nodes in list';

        if (current.nextNode == null && current.key != key) return false;
        if (current.key === key) return true;
        return this.containsRECURSIVE(key, current.nextNode);
    }

    // returns index of node containing key, otherwise null
    find(key) {
        if (!this.head) return 'No nodes in list';

        let current = this.head;
        let currentIndex = 0;
        if (current.key === key) return currentIndex;
        while (current.nextNode) {
            current = current.nextNode;
            currentIndex++;
            if (current.key === key) return currentIndex;
        }
        return null;
    }

    // returns index of node containing key, otherwise null RECURSIVELY
    findRECURSIVE(key, current = this.head, currentIndex = 0) {
        if (!this.head) return 'No nodes in list';

        if (!current.nextNode && current.key != key) return null;
        if (current.key === key) return currentIndex;
        return this.findRECURSIVE(key, current.nextNode, currentIndex + 1);
    }

    // prints to string
    toString() {
        if (!this.head) return 'No nodes in list';

        let current = this.head;
        let string = [`( ${current.key}: ${this.head.value} )`];
        while (current.nextNode) {
            current = current.nextNode;
            string.push(`( ${current.key}: ${current.value} )`);
        }
        return string.join(' -> ');
    }

    // inserts new node with key & value at index
    insertAt(key, value, index) {
        if (index < 0) return 'Invalid index';
        const newNode = new Node(key, value);
        if (index === 0) {
            newNode.nextNode = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;
        let previous;
        let currentIndex = 0;
        while (current && currentIndex < index) {
            previous = current;
            current = current.nextNode;
            currentIndex++;
        }
        if (currentIndex === index) {
            previous.nextNode = newNode;
            newNode.nextNode = current;
        } else {
            return;
        }
    }

    // removes node at index
    removeAt(index) {
        if (index < 0 || index > this.size()) return 'Invalid index';

        if (index == 0) {
            this.head = this.head.nextNode;
            return;
        }

        let current = this.head;
        let previous;
        let currentIndex = 0;

        while (currentIndex < index) {
            previous = current;
            current = current.nextNode;
            currentIndex++;
        }
        if (currentIndex === index) {
            previous.nextNode = current.nextNode;
            return;
        }
    }

    // update value at index but keeps same key RECURSIVELY
    updateValueRECURSIVE(index, newValue, current = this.head, currentIndex = 0) {
        if (!this.head) return 'No nodes in list';

        if (index < 0 || index > this.size()) return 'Invalid index'

        if (currentIndex === index) {
            current.value = newValue;
            return;
        } 
        return this.updateValueRECURSIVE(index, newValue, current.nextNode, currentIndex + 1);
    }

    // return array of all keys RECURSIVELY
    allKeysRECURSIVE(current = this.head, currentIndex = 0, allKeys = []) {
        if (!this.head) return 'No nodes in list';
        allKeys.push(current.key);
        if (!current.nextNode) return allKeys;
        return this.allKeysRECURSIVE(current.nextNode, currentIndex + 1, allKeys);
    }

    // return array of all values RECURSIVELY
    allValuesRECURSIVE(current = this.head, currentIndex = 0, allValues = []) {
        if (!this.head) return 'No nodes in list';
        allValues.push(current.value);
        if (!current.nextNode) return allValues;
        return this.allValuesRECURSIVE(current.nextNode, currentIndex + 1, allValues);
    }

    // return array of all entries RECURSIVELY
    allEntriesRECURSIVE(current = this.head, currentIndex = 0, allEntries = []) {
        if (!this.head) return 'No nodes in list';
        allEntries.push([current.key, current.value]);
        if (!current.nextNode) return allEntries;
        return this.allEntriesRECURSIVE(current.nextNode, currentIndex + 1, allEntries);
    }
}

export { LinkedList };
