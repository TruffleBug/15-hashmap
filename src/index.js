// import './styles.css';
import { HashMap } from './hashmap.js';
import { LinkedList } from './linkedlist.js';



// test linked list
// const testLinkedList = new LinkedList();

// testLinkedList.append('dog', 'DOG');
// testLinkedList.append('cat', 'CAT');
// testLinkedList.append('fish', 'FISH');
// testLinkedList.prepend('frog', 'FROG');
// testLinkedList.append('llama', 'LLAMA');


// console.log(testLinkedList.toString());
// console.log(testLinkedList.updateValueRECURSIVE(2, 'CATTEST'))
// // testLinkedList.updateRECURSIVE(1, 'llama')
// console.log(testLinkedList.toString());



// test hashmap
const testHashMap = new HashMap();

testHashMap.set('apple', 'APPLE');
testHashMap.set('appkd', 'APPKD');
testHashMap.set('apple', 'APPLETEST');
testHashMap.set('appkd', 'APPKDTEST');

testHashMap.set('banana', 'yellow');
testHashMap.set('carrot', 'orange');

console.log(testHashMap)
// console.log(testHashMap.buckets[1].toString())
