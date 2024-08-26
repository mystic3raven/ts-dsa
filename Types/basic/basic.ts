

// number
let age: number = 30;
let pi: number = 3.14;

// string
let name: string = "Alice";
let greeting: string = `Hello, ${name}!`;

// boolean
let isActive: boolean = true;
let hasPermission: boolean = false;

// array
let numbers: number[] = [1, 2, 3];
let fruits: Array<string> = ["apple", "banana", "orange"];
let person: [string, number] = ["Alice", 30];

// enum

enum Direction {
    Up,
    Down,
    Left,
    Right,
  }

  // any

  let move: Direction = Direction.Up;
  let randomValue: any = "Hello";

// void

randomValue = 42; // no error
function logMessage(message: string): void {
    console.log(message);
  }
  
// null and undefined
let u: undefined = undefined;
let n: null = null;


// object

let person: object = { name: "Alice", age: 30 };


//never
function throwError(message: string): never {
    throw new Error(message);
  }

  // unknown
  let value: unknown = "Hello";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}

// symbol
let sym1: symbol = Symbol("unique");
let sym2: symbol = Symbol("unique");


// bigint
let big: bigint = 100n;

// function

function add(a: number, b: number): number {
    return a + b;
  }


