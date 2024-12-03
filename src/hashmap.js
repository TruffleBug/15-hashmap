import { LinkedList } from './linkedlist.js';

class HashMap {
    // load factor = 0.75 - 1 (when we need to grow # buckets), capacity = # buckets
    loadFactor = 0.75;
    // linkedList = new LinkedList()

    constructor() {
        (this.buckets = Array.from({ length: 16 }, () => new LinkedList())),
            (this.count = 0);
    }

    // hash function -- produces hash code
    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode =
                (primeNumber * hashCode + key.charCodeAt(i)) %
                this.buckets.length;
        }
        return hashCode;
    }

    // adds new key/value pair (node) to appropriate bucket
    set(key, value) {
        const hashCode = this.hash(key);
        // console.log('key:', key, ', hashcode:', hashCode)

        if (this.buckets[hashCode].containsRECURSIVE(key) === true) {
            const indexOfNodeToChange = this.buckets[hashCode].findRECUSIVE(key);
            this.buckets[hashCode].updateValueRECURSIVE(indexOfNodeToChange, value);
        } else {
            this.buckets[hashCode].append(key, value);
            this.count ++;
            this.addMoreBuckets();
        }
        console.log('hashcode:', hashCode, ', linkedlist2: ', this.buckets[hashCode].toString())
    }

    // adds more buckets if needed
    addMoreBuckets () {
        if (this.count >= this.buckets.length * this.loadFactor) {
            let newBuckets = Array.from({ length: this.buckets.length }, () => new LinkedList())
            this.buckets.concat(newBuckets)
        }
        return
    }

}

export { HashMap };
