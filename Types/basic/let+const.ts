
/*
In TypeScript (and JavaScript), let and const are two ways to declare variables. Both are block-scoped, meaning they are only accessible within the block in which they are defined. However, they have key differences in terms of mutability and reassignment.
let

    Block Scope: Variables declared with let are block-scoped. They can only be accessed within the block (e.g., inside a function, loop, or conditional statement) in which they are defined.
    Mutable: Variables declared with let can be reassigned. This makes let suitable for variables that will change over time.


*/
let count = 0; // Initial declaration and assignment
count = 1;     // Reassignment is allowed

if (true) {
  let count = 2; // This is a different `count`, scoped to this block
  console.log(count); // 2
}

console.log(count); // 1 (the outer `count`)

/*
n this example, the count variable inside the if block is different from the count variable outside the block due to block scoping.
const

    Block Scope: Like let, const is also block-scoped. Variables declared with const can only be accessed within the block in which they are defined.
    Immutable Reference: Variables declared with const cannot be reassigned. However, this does not mean the value is completely immutable—if the value is an object or array, its properties or elements can still be modified.
*/

const maxLimit = 100; // Initial declaration and assignment
// maxLimit = 200; // Error: Cannot reassign a `const` variable

const person = { name: "Alice", age: 30 };
person.age = 31; // Allowed: The properties of the object can be changed
console.log(person.age); // 31

if (true) {
  const maxLimit = 50; // This is a different `maxLimit`, scoped to this block
  console.log(maxLimit); // 50
}

console.log(maxLimit); // 100 (the outer `maxLimit`)

/*
Key Differences Between let and const:

    Reassignment:
        let: Can be reassigned.
        const: Cannot be reassigned after initial assignment.

    Mutability:
        let: The variable itself is mutable, and you can reassign it to a different value.
        const: The reference to the value is immutable, meaning you cannot change what the variable points to. However, if the value is an object or array, the contents of the object or array can still be modified.

    Use Cases:
        let: Use let when you expect the value of a variable to change over time, such as in loops or when tracking a changing state.
        const: Use const when you want to ensure that the variable's reference will not change, which is common for constants, configuration values, or when you want to avoid accidental reassignment.
*/

const pi = 3.14; // Constant value that shouldn't change
let radius = 5;  // Value that might change

const area = pi * radius * radius;
console.log(`Area of circle: ${area}`); // Area of circle: 78.5

radius = 10; // `radius` can be changed
const newArea = pi * radius * radius;
console.log(`New area of circle: ${newArea}`); // New area of circle: 314

/*
In this example, pi is declared with const because it's a constant value, while radius is declared with let because it may change.
Best Practices:

    Prefer const over let: Use const by default and only use let when you know the variable will need to be reassigned. This helps prevent unintended changes to your variables and makes your code more predictable.
    Avoid var: The older var keyword has different scoping rules and can lead to unexpected behavior, so it’s generally recommended to use let and const instead.

By using let and const appropriately, you can write clearer and more maintainable TypeScript code.
*/


// Simple var with Primitive Types
var x = 10; // Number
var y = "Hello"; // String
var z = true; // Boolean
console.log(x, y, z);


// 2. Simple let with Primitive Types
let a = 20; // Number
let b = "World"; // String
let c = false; // Boolean
console.log(a, b, c);

// 3. Simple const with Primitive Types
const pi = 3.14; // Number
const greeting = "Hello, World"; // String
const isLoggedIn = true; // Boolean
console.log(pi, greeting, isLoggedIn);

// 4. var with Reassignment
var count = 5;
count = 10; // Reassignment is allowed
console.log(count);

// 5. let with Reassignment

let score = 50;
score = 75; // Reassignment is allowed
console.log(score);


// 6. const with Objects

const user = {
    name: "Alice",
    age: 25,
  };
  user.age = 26; // Allowed: Changing a property
  console.log(user);

  
// 7. const with Arrays

const numbers = [1, 2, 3];
numbers.push(4); // Allowed: Modifying the array
console.log(numbers);


// 8. let with Arrays
let fruits = ["apple", "banana"];
fruits = ["orange", "mango"]; // Reassignment is allowed
console.log(fruits);


// 9. let with Conditionals
let isActive = false;
if (true) {
  let isActive = true; // Block-scoped
  console.log(isActive); // true
}
console.log(isActive); // false

// 10. const with Function References

const add = (a: number, b: number) => a + b;
console.log(add(2, 3)); // 5

// 11. var with Function Scope
function example() {
    var message = "Hello";
    if (true) {
      var message = "World"; // Function-scoped
      console.log(message); // World
    }
    console.log(message); // World
  }
  example();

// 12. let with Block Scope
function example() {
    var message = "Hello";
    if (true) {
      var message = "World"; // Function-scoped
      console.log(message); // World
    }
    console.log(message); // World
  }
  example();

// 12. let with Block Scope
let age = 30;
if (true) {
  let age = 25; // Block-scoped
  console.log(age); // 25
}
console.log(age); // 30

//13. const with Objects and Destructuring
const person = { name: "Bob", age: 40 };
const { name, age } = person;
console.log(name, age); // Bob 40

// 14. let with Loops
for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  // console.log(i); // Error: `i` is not defined outside the loop

  
// 15. const with Arrays and Spread Operator
const colors = ["red", "green"];
const newColors = [...colors, "blue"]; // Using spread operator
console.log(newColors);


// 16. let with Arrays and Destructuring
let numbers = [10, 20, 30];
let [first, second, third] = numbers;
console.log(first, second, third); // 10 20 30

// 17. const with Nested Objects

const config = {
    server: {
      host: "localhost",
      port: 8080,
    },
  };
  config.server.port = 9090; // Allowed: Modifying nested property
  console.log(config);

  
// 18. var and Hoisting
console.log(name); // undefined due to hoisting
var name = "Alice"; // Hoisted to the top of its scope


// 19. let and Temporal Dead Zone (TDZ)
// console.log(value); // Error: Cannot access 'value' before initialization
let value = 42; // `let` is not hoisted like `var`

// 20. const with Object Freezing
const data = Object.freeze({
    id: 1,
    name: "John",
  });
  // data.name = "Doe"; // Error: Cannot modify a frozen object
  console.log(data);

  
/*
Explanation of Complexity:

    Basic Types and var, let, and const: Start with simple declarations and assignments.
    Reassignment: Demonstrate how var and let allow reassignment, while const does not.
    Collections (Arrays and Objects): Show how const works with objects and arrays, allowing modification of contents but not reassignment.
    Scoping Rules: Demonstrate the differences in scope between var, let, and const.
    Destructuring and Spread Operator: Introduce more advanced operations with arrays and objects.
    Hoisting and Temporal Dead Zone: Show how var is hoisted and how let and const behave differently.
    Object Freezing: Show how to make an object immutable with Object.freeze.

These examples should help clarify the differences and behaviors of var, let, and const in TypeScript, progressively increasing in complexity.
*/



