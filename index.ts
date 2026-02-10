//Task 1

const greet = (firstName: string) => {
  return `Hello, ${firstName}`; //fix
};

console.log(greet(`Sonal`)); // added console here for execution

// // Checklist to complete:
// // Add braces {} and return statement
// // Use const
// // Add semicolons
// // Use template literals
// // Fix spacing

// // Task 2-

const double = (n: number) => {
  return n * 2;
};
console.log(double(5));

// // Checklist to complete:
// // Add braces {} and return statement
// // Use const
// // Add semicolons
// // Fix spacing
// // Use template literals in log

// // Task 3

const isEven = (num: number) => {
  return num % 2 === 0; //add return
};
console.log(isEven(8));
console.log(isEven(5));

// // Checklist to complete:
// // Add braces {} and return statement
// // Use const
// // Add semicolons
// // Fix spacing
// // Add a console.log test

// // Task 4-

const square = (x: number) => {
  return x * x;
};
console.log(`Square is ${square(9)}`);

// Checklist to complete:
// Add braces {} and return statement
// Use const
// Add semicolons
// Fix spacing around *
// Use template literals

// // Task 5

const getAge = (year: number) => {
  return 2026 - year; //added return
};
console.log(`Current Age is`, getAge(1990)); //add descriptive log here

// // Checklist to complete:
// // Add braces {} and return statement
// // Use const
// // Add semicolons
// // Fix spacing around –
// // Add a descriptive log

// // Task 6 -

const prices = [10, 20, 30];
let total = 0;

prices.forEach((p) => {
  total += p;
});
console.log(`The total price is ${total}`);

// // Checklist to complete:
// // Use forEach instead of map
// // Add braces {} to arrow function
// // Use const for prices
// // Add semicolons
// // Use template literals for output

// // Task 7

const user = { name: "John" };
const sayHi = () => {
  console.log(`Hi ${user.name}`);
};
sayHi();

// // Checklist to complete:
// // Add braces {}
// // Use const
// // Add semicolons
// // Use template literals
// // Fix object spacing { name: 'John' }

// // Task 8

const colors = ["red", "blue"];
colors.forEach((c) => {
  //added 2 braces
  console.log(`Color name is: ${c}`); //new line
});

// // Checklist to complete:
// // Add braces {}
// // Use const
// // Add semicolons
// // Use template literals
// // Ensure newline at end of file

// // Task 9-

const items = [1, 2, 3];
const doubled = () => {
  //braces
  return items.map((i) => {
    // missing return
    return i * 2; //missing return
  });
};

console.log(`Doubled items: ${doubled()}`);

// // Checklist to complete:
// // Add braces {} and return
// // Use const
// // Add semicolons
// // Fix spacing
// // Log the result with template literals

// // Task 10

const checkAuth = (user = { isAdmin : true }) => {
  return user.isAdmin;
};
console.log(checkAuth());

// // Checklist to complete:
// // Add braces {} and return
// // Use const
// // Add semicolons
// // Fix spacing
// // Simplify logic (return user.isAdmin)

// // Task 11

import fs from "fs";
const read = (path:string) => {
    fs.readFile(path, (err, d) => 
    console.log(d))};


// // Checklist to complete:
// // Refactor to async/await
// // Add braces {}
// // Handle errors explicitly
// // Add semicolons
// // Use template literals

// // Task 12-

const getData = (url) => fetch(url).then((r) => r.json());

// // Checklist to complete:
// // Refactor to async/await
// // Add braces {}
// // Add try/catch block
// // Add semicolons
// // // Use template literals for errors

// // Task 13

const process = (data) => data.filter((x) => x > 10).map((x) => x * 2);

// // Checklist to complete:
// // Add braces {} to all arrows
// // Add return statements
// // Add semicolons
// // Fix spacing
// // Add type annotations (TS)

// // Task 14

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

// // Checklist to complete:
// // Add braces {}
// // Add semicolons
// // Use const
// // Add a test async function
// // Use template literals in logs

// // Task 15
const logErr = (m) => console.error("Error: " + m);

// // Checklist to complete:
// // Add braces {}
// // Use template literals
// // Add semicolons
// // Use const
// // Ensure capitalized comments
