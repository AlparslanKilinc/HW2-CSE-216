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
let gKey= tree.generateKey();
let pKey= tree.generateKey();
let rKey= tree.generateKey();
let cKey= tree.generateKey();
let mKey= tree.generateKey();
let jKey= tree.generateKey();
let rwKey= tree.generateKey();
addPersonToBST(new Student(gKey, "George", "Harrison", 4.0), tree);
addPersonToBST(new Employee(pKey, "Paul", "McCartney", 80000), tree);
addPersonToBST(new Employee(rKey, "Ringo", "Starr", 40000), tree);
addPersonToBST(new Person(cKey, "Chuck", "Berry"), tree);
addPersonToBST(new Student(mKey, "Mick", "Jagger", 3.5), tree);
addPersonToBST(new Student(jKey, "Jimi", "Hendrix", 3.6), tree);
addPersonToBST(new Person(rwKey, "Roger", "Waters"), tree);

// DEMONSTRATE MAKING KEYS AND ADDING VALUES TO THE BST    
let jlKey = tree.generateKey();
tree.putValue(jlKey, new Student(jlKey, "John", "Lennon", 3.8));
let cwKey = tree.generateKey();
tree.putValue(cwKey, new Student(cwKey, "Charlie", "Watts", 3.1));
let dgKey = tree.generateKey();
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

tree.removeValue(cwKey);
printBST("\nAfter Removing Keith Richards", tree);

tree.removeValue(dgKey);
printBST("\nAfter Removing Bill Withers", tree);

tree.removeValue(gKey);
printBST("\nAfter Removing Root", tree);

/// Further Testing Right Subtree Removal 
tree.removeValue(rwKey);
printBST("\nAfter Removing Roger Waters", tree);

tree.removeValue(mKey);
printBST("\nAfter Removing Mick Jagger", tree); 

/// Adding Values 
let clKey=tree.generateKey();
let baKey=tree.generateKey();
let jsKey=tree.generateKey();
tree.putValue(clKey, new Student(clKey, "Code", "Lover", 3.5));
tree.putValue(baKey, new Student(baKey, "Bisco", "Arrow", 3.1));
tree.putValue(jsKey, new Student(jsKey, "Jack", "Sparrow", 3.4));
printBST("\nAfter Adding 3 Items", tree);

/// Replacing  
tree.putValue(clKey, new Student(clKey, "Dark", "Spin", 3.5));
tree.putValue(baKey, new Student(baKey, "Caramel", "Drop", 3.1));
tree.putValue(jsKey, new Student(jsKey, "Heisenberg", "White", 3.4));
printBST("\nAfter Replacing 3 Items", tree);

tree.removeValue(jsKey);
printBST("\nAfter Removing Heisenberg White", tree); 

/// Delete Everything 
tree.removeValue(clKey);
tree.removeValue(baKey);
tree.removeValue(pKey);
tree.removeValue(rKey);
tree.removeValue(cKey);
tree.removeValue(jKey);

/// Enter All Left Sub Tree
 tree.putValue("zzzzzzzz", new Student("zzzzzzzz", "Code", "Lover", 3.5));
 printBST("\nAfter Adding 1 More Item", tree);
tree.putValue("yyyyyyyy", new Student("yyyyyyyy", "Bisco", "Arrow", 3.1));
tree.putValue("wwwwwwww", new Student("wwwwwwww", "Jack", "Sparrow", 3.4));
printBST("\nAfter Adding 3 Items", tree);

/// RIGHT SUBTREE Of W 
tree.putValue("aaaaaaaa", new Student("aaaaaaaa", "Cat", "Meow", 3.5));
tree.putValue("bbbbbbbb", new Student("bbbbbbbb", "Dog", "Bark", 3.1));
tree.putValue("cccccccc", new Student("cccccccc", "Bird", "Fly", 3.4));
printBST("\nAfter Adding 3 More Items", tree);


