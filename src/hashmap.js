import { LinkedList } from './linkedlist.js';

class HashMap {
    // load factor = 0.75 - 1 (when we need to grow # buckets), capacity = # buckets
    loadFactor = 0.75;

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
                (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
        }
        return hashCode;
    }

    // adds new key/value pair or updates existing key
    set(key, value) {
        const hashCode = this.hash(key);
        // console.log('key:', key, ', hashcode:', hashCode)
        if (this.buckets[hashCode].containsRECURSIVE(key) === true) {
            const indexAt = this.buckets[hashCode].findRECURSIVE(key);
            this.buckets[hashCode].updateValueRECURSIVE(indexAt, value);
        } else {
            this.buckets[hashCode].append(key, value);
            this.count ++;
            this.addMoreBuckets();
        }
        console.log('hashcode:', hashCode, ', linkedlist2: ', this.buckets[hashCode].toString());
    }

    // adds more buckets if needed
    addMoreBuckets() {
        if (this.count >= this.buckets.length * this.loadFactor) {
            const allEntries = this.entries();
            let newBuckets = Array.from({ length: this.buckets.length * 2}, () => new LinkedList());
            this.buckets = newBuckets;
            this.count = 0;
            allEntries.forEach((entry) => {
                this.set(entry[0], entry[1]);
            });
            console.log('More buckets!!!');
        }
        return;
    }

    // returns value assigned to key, otherwise null
    get(key) {
        const hashCode = this.hash(key);
        if (this.buckets[hashCode].containsRECURSIVE(key) === true) {
            const atIndex = this.buckets[hashCode].find(key);
            return this.buckets[hashCode].atValue(atIndex);
        } 
        return null;
    }

    // returns true if key exists, otherwise false
    has(key) {
        const hashCode = this.hash(key);
        if (this.buckets[hashCode].containsRECURSIVE(key) === true) return true;
        return false;
    }

    // removes entry w/ key if it exists, otherwise return false
    remove(key) {
        const hashCode = this.hash(key);
        if (this.buckets[hashCode].containsRECURSIVE(key) === true) {
            const atIndex = this.buckets[hashCode].findRECURSIVE(key);
            this.buckets[hashCode].removeAt(atIndex);
            return `Removed ${key}`;
        }
        return false;
    }

    // returns # keys 
    length() {
        return this.count;
    }

    // removes all entries 
    clear() {
        this.buckets.forEach((bucket) => {
            while(bucket.head) {
                bucket.removeAt(0);
            };
        });
        this.count = 0;
        return 'Cleared';
    }

    // returns array of all keys 
    keys() {
        let allKeys = [];
        this.buckets.forEach((bucket) => {
            if(bucket.head) {
                allKeys = allKeys.concat(bucket.allKeysRECURSIVE());
            };
        });
        return allKeys;
    }

    // returns array of all values 
    values() {
        let allValues = [];
        this.buckets.forEach((bucket) => {
            if(bucket.head) {
                allValues = allValues.concat(bucket.allValuesRECURSIVE());
            };
        });
        return allValues;
    }

    // returns array of all key/value pairs
    entries() {
        let allEntries = [];
        this.buckets.forEach((bucket) => {
            if(bucket.head) {
                allEntries = allEntries.concat(bucket.allEntriesRECURSIVE());
            };
        });
        return allEntries;
    }

}

export { HashMap };
