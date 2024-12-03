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
// console.log(testLinkedList.updateValueRECURSIVE(0, 'FROGTEST'))
// console.log(testLinkedList.toString());



// test hashmap
const testHashMap = new HashMap();

testHashMap.set('apple', 'red')
testHashMap.set('banana', 'yellow')
testHashMap.set('carrot', 'orange')
testHashMap.set('dog', 'brown')
testHashMap.set('elephant', 'gray')
testHashMap.set('frog', 'green')
testHashMap.set('grape', 'purple')
testHashMap.set('hat', 'black')
testHashMap.set('ice cream', 'white')
testHashMap.set('jacket', 'blue')
testHashMap.set('kite', 'pink')
testHashMap.set('lion', 'golden')

console.log(testHashMap)
console.log(testHashMap.entries())