import BinarySearchTree from "./BinarySearchTree.js";
import { Person, Employee, Student } from "./People.js";

const NUM_BINS = 5;
const KEY_LENGTH = 8;

function printBST(header, tree) {
    let text = tree.toString() + "\n";
    console.log(header + "\n" + text);
    let outputDisplay = document.getElementById("output-display");
    text = text.replaceAll(/(?:\r\n|\r|\n)/g, '<br>');
    text = text.replaceAll(" ", '&nbsp;');
    outputDisplay.innerHTML += text;
}

function addPersonToBST(person, tree) {
    tree.putValue(person.key, person);
    printBST("Current Binary Search Tree:", tree);
}

let tree = new BinarySearchTree(KEY_LENGTH);

// DEMONSTRATE ADDING VALUES TO THE BST, WHICH INCLUDES THE NEED TO MAKE THE BST BIGGER
addPersonToBST(new Student("JY9757AC", "George", "Harrison", 4.0), tree);
addPersonToBST(new Employee("X1EVE7NM", "Paul", "McCartney", 80000), tree);
addPersonToBST(new Employee("OIGSZ8FX", "Ringo", "Starr", 40000), tree);
addPersonToBST(new Person("QQQVJJ5I", "Chuck", "Berry"), tree);
addPersonToBST(new Student("IU531GVY", "Mick", "Jagger", 3.5), tree);
addPersonToBST(new Student("X99BWDEK", "Jimi", "Hendrix", 3.6), tree);
addPersonToBST(new Person("BUATAJ889", "Roger", "Waters"), tree);

// DEMONSTRATE MAKING KEYS AND ADDING VALUES TO THE BST    
let jlKey = "EE4DX9WF";
tree.putValue(jlKey, new Student(jlKey, "John", "Lennon", 3.8));
let cwKey = "KHYLDTOR";
tree.putValue(cwKey, new Student(cwKey, "Charlie", "Watts", 3.1));
let dgKey = "I92F2WFE";
tree.putValue(dgKey, new Employee(dgKey, "David", "Gilmour", 120000));
printBST("\nAfter Changing 3 Items", tree);

// DEMONSTRATE GETTING VALUES FROM THE BST
let p = tree.getValue(jlKey);
console.log("\nget " + jlKey + ": " + p.toString() + "\n");
p = tree.getValue(cwKey);
console.log("\nget " + cwKey + ": " + p.toString() + "\n");
p = tree.getValue(dgKey);
console.log("\nget " + dgKey + ": " + p.toString() + "\n");

// NOW LET'S TRY REPLACING THE DATA IN THE ABOVE THREE
tree.putValue(jlKey, new Student(jlKey, "Otis", "Redding", 3.5));
tree.putValue(cwKey, new Student(cwKey, "Keith", "Richards", 3.1));
tree.putValue(dgKey, new Student(dgKey, "Bill", "Withers", 3.4));
printBST("\nAfter Changing 3 Items", tree);

/// AND DEMONSTRATE REMOVING ITEMS FROM THE BST
tree.removeValue(jlKey);
printBST("\nAfter Removing Otis Redding", tree);
console.log(tree.size);
tree.removeValue(cwKey);
printBST("\nAfter Removing Keith Richards", tree);
console.log(tree.size);
tree.removeValue(dgKey);
printBST("\nAfter Removing Bill Withers", tree);
console.log(tree.size);
tree.removeValue("X1EVE7NM");
printBST("\nAfter Removing Paul", tree);
console.log(tree.size);


