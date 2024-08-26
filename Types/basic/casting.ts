// The any Type in TypeScript

// amy type
let randomValue: any = "Hello";
randomValue = 42; // No error, as `any` allows reassignment to any type.
randomValue = true; // Still no error.

console.log(randomValue); // true


// Explicit Casting in TypeScriptExplicit Casting in TypeScript

let someValue: any = "This is a string";

let stringLength: number = (<string>someValue).length;
console.log(stringLength); // Output: 16


// as syntax
let someValue: any = "This is a string";

let stringLength: number = (someValue as string).length;
console.log(stringLength); // Output: 16

// Example of Explicit Casting with any Type:
let randomValue: any = "Hello, TypeScript!";

// TypeScript does not know that `randomValue` is a string, so we explicitly cast it.
let strLength: number = (<string>randomValue).length; // Angle-bracket syntax
let strLength2: number = (randomValue as string).length; // `as` syntax

console.log(strLength); // Output: 16
console.log(strLength2); // Output: 16


/*
Use Cases for Explicit Casting:

    Working with any or unknown: When you have a variable of type any or unknown and you know the exact type it should be, you can use casting to tell TypeScript what the type is.

    DOM Manipulation: Often used when working with HTML elements or DOM objects in a TypeScript environment.
*/
let inputElement = document.getElementById("input") as HTMLInputElement;
console.log(inputElement.value);

/*
Dealing with JSON Parsing: After parsing JSON data, you can cast the result to a specific type to ensure that you work with the expected structure.
*/
let data: any = JSON.parse('{"name": "Alice", "age": 30}');
let user = data as { name: string; age: number };
console.log(user.name); // Alice

/*
Caution with Casting:

    Incorrect Casting: If you cast a variable to a wrong type, TypeScript won't catch it at compile time, leading to potential runtime errors.Caution with Casting:

    Incorrect Casting: If you cast a variable to a wrong type, TypeScript won't catch it at compile time, leading to potential runtime errors.

*/
let someValue: any = "Hello, World!";
let numValue: number = <number>someValue; // This is incorrect and will lead to issues.

console.log(numValue); // It will not behave as expected.

/*
Avoid Overusing any: Relying too much on any can make your code harder to maintain and reduce the benefits of using TypeScript.
*/

