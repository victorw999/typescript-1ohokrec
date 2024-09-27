//-------------------------
// TYPE ANNOTATION 注解
//-------------------------
let name: string = 'John';
let age: number = 25;
let active: boolean = true;

//-------------------------
// ARRAYS
let fruits: string[] = ['wax apple', 'prickly pear'];

//-------------------------
// OBJ
let person: {
  name: string;
  age: number;
};

person = {
  name: 'John',
  age: 25,
}; // valid

//-------------------------
// FUNC
let greeting: (name: string) => string;

greeting = function (name: string) {
  return `Hi ${name}`;
};

// invalid
// greeting = function () {
//   console.log('Hello');
// };

// name = 1;
console.log(`name: ${name}`);
