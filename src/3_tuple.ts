let skill: [string, number];
skill = ['Programming', 5];

// skill = [1, "hooah"] // not allowed to change order

console.log('typeof skill ', typeof skill);
console.log('typeof skill[0] ', typeof skill[0]);
console.log('typeof skill[1] ', typeof skill[1]);

let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];

console.log('bgColor: ', bgColor);
console.log('headerColor: ', headerColor);

type StringNumberPair = [string, number];

function doSomething(pair: [string, number]) {
  const a = pair[0];
  console.log('typeof a :', typeof a, typeof a === 'string')
  const b = pair[1];
  console.log('typeof b :', typeof b, typeof a === 'number')
}

doSomething(["hello", 42]);


//The tuple still has access to all standard array methods, like slice(), map(), etc.,

let test: StringNumberPair = ['test', 123]

console.log('===> test ', test)
console.log('===> use slice() on Tuple ', test.slice(0, 1))
console.log('===> use filter() on Tuple  ', test.filter(i => i === 123))