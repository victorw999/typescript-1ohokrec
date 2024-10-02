interface Person {
  firstName: string;
  lastName: string;
}

type Person2 = {
  firstName: string;
  lastName: string;
}

////
function getName1(person: {
  firstName: string;
  lastName: string
}) {
  return `${person.firstName} ${person.lastName}`;
}

////
function getName2(person: Person) {
  return `${person.firstName} ${person.lastName}`;
}

////
function getName3({ firstName, lastName }: Person) {
  return `${firstName} ${lastName}`;
}

////
function getName4({ firstName, lastName }: Person2) {
  return `${firstName} ${lastName}`;
}


let guy = {
  firstName: 'John',
  lastName: 'Doe'
};
let jane = {
  firstName: 'Jane',
  middleName: 'K.',
  lastName: 'Pokimon',
  age: 22,
};

console.log('getName1:', getName1(guy))
console.log('getName2:', getName2(guy))
console.log('getName3:', getName3(guy))
console.log('getName4:', getName4(jane))

/// 
interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "Hayes",
  id: 0,
};

// const user: User = {
//   username: "Hayes", //err Object literal may only specify known properties, and 'username' does not exist in type 'User'.
//   id: 0,
// };

console.log('===> user:', user)
