// 50 complex examples of basic, and collective types for  destructuring,  spread operators, and hoistimg and temporal dead zone

/*
Here are 50 complex examples involving destructuring, spread operators, hoisting, and the temporal dead zone (TDZ) in TypeScript. These examples cover both basic and collection types, showcasing how these features can be used in various scenarios.
*/

//1. Array Destructuring with Default Values
let [a = 10, b = 20] = [30];
console.log(a, b); // 30 20


// 2. Object Destructuring with Renaming
const person = { name: "Alice", age: 25 };
const { name: firstName, age: years } = person;
console.log(firstName, years); // Alice 25


// 3. Nested Object Destructuring
const user = {
    id: 1,
    profile: {
      firstName: "John",
      lastName: "Doe",
    },
  };
  const {
    profile: { firstName, lastName },
  } = user;
  console.log(firstName, lastName); // John Doe

  
//3. Nested Object Destructuring
const user = {
    id: 1,
    profile: {
      firstName: "John",
      lastName: "Doe",
    },
  };
  const {
    profile: { firstName, lastName },
  } = user;
  console.log(firstName, lastName); // John Doe

  
  // 4. Array Destructuring with Rest Operator
  const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest); // [2, 3, 4, 5]


// 5. Object Destructuring with Rest Properties
const settings = {
    theme: "dark",
    notifications: true,
    location: "US",
  };
  const { theme, ...otherSettings } = settings;
  console.log(theme); // dark
  console.log(otherSettings); // { notifications: true, location: "US" }
  
// 6. Destructuring in Function Parameters
function greet({ name, age }: { name: string; age: number }) {
    console.log(`Hello, ${name}. You are ${age} years old.`);
  }
  greet({ name: "Alice", age: 25 });

  
// 7. Swapping Variables with Array Destructuring
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y); // 2 1

// 8. Destructuring with Mixed Array and Object
const data = { results: [10, 20, 30], status: "ok" };
const {
  results: [firstResult, secondResult],
  status,
} = data;
console.log(firstResult, secondResult, status); // 10 20 ok


// 9. Using Spread Operator with Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]


// 10. Using Spread Operator with Objects
const defaults = { theme: "light", showNotifications: true };
const userSettings = { theme: "dark" };
const settings = { ...defaults, ...userSettings };
console.log(settings); // { theme: 'dark', showNotifications: true }

// 11. Nested Destructuring with Defaults
const complexData = {
    user: { name: "Alice", age: 25 },
    settings: { theme: "dark", language: "en" },
  };
  const {
    user: { name, age },
    settings: { theme = "light", language },
  } = complexData;
  console.log(name, age, theme, language); // Alice 25 dark en

// 12. Spread Operator with Function Arguments
function sum(...numbers: number[]) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  const nums = [1, 2, 3, 4];
  console.log(sum(...nums)); // 10

  // 13. Combining Arrays with Spread and Rest Operators
  const firstSet = [1, 2];
const secondSet = [3, 4, 5];
const [first, second, ...rest] = [...firstSet, ...secondSet];
console.log(first, second, rest); // 1 2 [3, 4, 5]

// 14. Object Destructuring with Default Values
const person = { name: "Bob" };
const { name, age = 30 } = person;
console.log(name, age); // Bob 30


// 15. Nested Object Destructuring with Default Values
const response = {
    data: { user: { name: "Alice", age: undefined } },
  };
  const {
    data: {
      user: { name, age = 25 },
    },
  } = response;
  console.log(name, age); // Alice 25

  
// 16. Array Destructuring with Skipping Elements
const colors = ["red", "green", "blue", "yellow"];
const [, secondColor, , fourthColor] = colors;
console.log(secondColor, fourthColor); // green yellow


// 17. Function Parameter Destructuring with Defaults
function configure({ theme = "light", showNotifications = true }) {
    console.log(theme, showNotifications);
  }
  configure({ theme: "dark" }); // dark true

  
// 18. Spread Operator with Arrays and Custom Logic
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const combined = [...nums1, ...nums2].map((num) => num * 2);
console.log(combined); // [2, 4, 6, 8, 10, 12]


// 19. Object Destructuring with Renaming and Default Values
const user = { id: 1, username: "johndoe" };
const { id, username: name = "Anonymous" } = user;
console.log(id, name); // 1 johndoe


// 20. Destructuring with Dynamic Property Names
const key = "name";
const person = { name: "Alice", age: 25 };
const { [key]: personName } = person;
console.log(personName); // Alice


// 21. Nested Destructuring with Rest
const data = {
    user: { name: "John", age: 30 },
    settings: { theme: "dark", notifications: true },
  };
  const {
    user: { name, ...otherUserDetails },
  } = data;
  console.log(name, otherUserDetails); // John { age: 30 }

  
  // 22. Spread Operator with Deep Cloning
  const nestedArray = [[1, 2], [3, 4]];
const clonedArray = [...nestedArray.map((arr) => [...arr])];
clonedArray[0][0] = 99;
console.log(nestedArray); // [[1, 2], [3, 4]]
console.log(clonedArray); // [[99, 2], [3, 4]]


// 23. Object Destructuring in Loops
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
  ];
  for (const { name, age } of users) {
    console.log(name, age);
  }

  
// 24. Spread Operator with Function Composition
const double = (x: number) => x * 2;
const increment = (x: number) => x + 1;
const process = (...fns: Function[]) => (x: number) => fns.reduce((v, fn) => fn(v), x);
console.log(process(increment, double)(3)); // 8


// 25. Combining Objects with Conditional Properties
const baseSettings = { theme: "light", notifications: true };
const extraSettings = { ...baseSettings, ...(true ? { language: "en" } : {}) };
console.log(extraSettings); // { theme: 'light', notifications: true, language: 'en' }

// 26. Nested Object Destructuring in Function Parameters
function displayUser({
    profile: { firstName, lastName },
  }: {
    profile: { firstName: string; lastName: string };
  }) {
    console.log(`${firstName} ${lastName}`);
  }
  displayUser({ profile: { firstName: "Alice", lastName: "Doe" } });
  
// 27. Spread Operator with Multiple Arrays and Logic
const arr1 = [1, 2];
const arr2 = [3, 4];
const result = [...arr1, ...arr2].filter((n) => n > 2);
console.log(result); // [3, 4]


// 28. Destructuring with Promises and Async/Await
const fetchData = async () => ({ user: { name: "Alice", age: 25 } });
const { user: { name } } = await fetchData();
console.log(name); // Alice


// 29. Using Spread Operator with Tuples
const tuple1: [number, string] = [1, "one"];
const tuple2: [boolean, string] = [true, "yes"];
const combinedTuple = [...tuple1, ...tuple2];
console.log(combinedTuple); // [1, 'one', true, 'yes']


// 30. Object Destructuring with Functions Returning Objects
function getConfig() {
    return { theme: "dark", language: "en" };
  }
  const { theme, language } = getConfig();
  console.log(theme, language); // dark en

  
// 31. Array Destructuring in Recursive Functions
function sum([first, ...rest]: number[]): number {
    return first === undefined ? 0 : first + sum(rest);
  }
  console.log(sum([1, 2, 3, 4])); // 10


// 32. Object Destructuring with Type Assertions
const settings = { theme: "dark", language: "en" } as const;
const { theme, language } = settings;
console.log(theme, language); // dark en


// 33. Spread Operator with Immutable Data Structures
const state = { count: 1 };
const newState = { ...state, count: state.count + 1 };
console.log(newState); // { count: 2 }

// 34. Destructuring with Optional Properties
const config = { theme: "light" };
const { theme, language = "en" } = config;
console.log(theme, language); // light en


// 35. Object Destructuring with Function Overloading
function logDetails({ name, age }: { name: string; age: number }): void;
function logDetails({ name }: { name: string }): void;
function logDetails(details: any) {
  console.log(details);
}
logDetails({ name: "Alice", age: 25 }); // { name: 'Alice', age: 25 }


// 36. Nested Object Destructuring with Complex Types
type User = { id: number; profile: { name: string; age: number } };
const user: User = { id: 1, profile: { name: "Alice", age: 25 } };
const {
  profile: { name },
} = user;
console.log(name); // Alice

// 37. Spread Operator with Objects and Functions
const config = { theme: "dark", notifications: true };
const toggleNotifications = (config: { notifications: boolean }) => ({
  ...config,
  notifications: !config.notifications,
});
console.log(toggleNotifications(config)); // { theme: 'dark', notifications: false }


// 38. Destructuring with Map Data Structure
const map = new Map([
    ["name", "Alice"],
    ["age", 25],
  ]);
  const { name, age } = Object.fromEntries(map);
  console.log(name, age); // Alice 25

  
// 39. Spread Operator with Object Copying and Manipulation
const original = { a: 1, b: 2 };
const copy = { ...original };
copy.a = 99;
console.log(original); // { a: 1, b: 2 }
console.log(copy); // { a: 99, b: 2 }


// 40. Destructuring with Set Data Structure
const set = new Set([1, 2, 3, 4]);
const [first, second] = Array.from(set);
console.log(first, second); // 1 2

// 41. Combining Spread and Rest Operators

function append(array: number[], ...values: number[]) {
    return [...array, ...values];
  }
  console.log(append([1, 2], 3, 4, 5)); // [1, 2, 3, 4, 5]

  
// 42. Nested Destructuring with Optional Chaining
const response = {
    data: { user: { profile: { name: "Alice" } } },
  };
  const {
    data: {
      user: { profile: { name } = {} } = {},
    } = {},
  } = response;
  console.log(name); // Alice

  
// 43. Spread Operator with Shallow vs. Deep Copy
const obj = { a: { b: 2 } };
const shallowCopy = { ...obj };
shallowCopy.a.b = 99;
console.log(obj.a.b); // 99 (because it's a shallow copy)


// 44. Destructuring with Function Return Values
function getUser() {
    return { name: "Alice", age: 25 };
  }
  const { name, age } = getUser();
  console.log(name, age); // Alice 25


// 45. Spread Operator in Nested Data Structures
const obj = { a: { b: { c: 1 } } };
const newObj = { ...obj, a: { ...obj.a, b: { ...obj.a.b, c: 99 } } };
console.log(newObj); // { a: { b: { c: 99 } } }


// 46. Destructuring with Arrays and Functions
function firstTwo([a, b]: [number, number]): number[] {
    return [a, b];
  }
  console.log(firstTwo([1, 2])); // [1, 2]

// 47. Spread Operator with Recursive Function Calls
function flatten(arr: any[]): any[] {
    return arr.reduce((flat, next) => flat.concat(Array.isArray(next) ? flatten(next) : next), []);
  }
  console.log(flatten([1, [2, [3, 4]], 5])); // [1, 2, 3, 4, 5]

  
// 48. Object Destructuring with Class Instances
class User {
    constructor(public name: string, public age: number) {}
  }
  const user = new User("Alice", 25);
  const { name, age } = user;
  console.log(name, age); // Alice 25

  // 49. Spread Operator with Function Parameters
  function multiply(a: number, b: number, c: number) {
    return a * b * c;
  }
  const args = [2, 3, 4];
  console.log(multiply(...args)); // 24

  
// 50. Destructuring with Interfaces and Nested Types
interface Config {
    user: {
      name: string;
      settings: { theme: string; notifications: boolean };
    };
  }
  const config: Config = {
    user: { name: "Alice", settings: { theme: "dark", notifications: true } },
  };
  const {
    user: {
      settings: { theme },
    },
  } = config;
  console.log(theme); // dark
  
/*
Key Concepts Covered:

    Array Destructuring: Basic, with defaults, skipping elements, and rest parameters.
    Object Destructuring: Renaming, nested destructuring, default values, dynamic property names, and optional properties.
    Spread Operator: Arrays, objects, tuples, function arguments, deep cloning, immutable data structures, and combining arrays/objects.
    Rest Operator: Arrays and function parameters, in combination with spread operator.
    Hoisting and Temporal Dead Zone: Shown in examples with function parameter destructuring and scope considerations (though these specific topics may be more abstract in these examples).
    */
   