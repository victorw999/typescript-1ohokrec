// First Interface
interface Greetable {
  sayHello(): void;
}

// Second Interface
interface Studyable {
  study(): void;
}

// Third Interface
interface Playable {
  play(): void;
}

// Base Class
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  walk() {
    console.log(`walk(): ${this.name} is walking.`);
  }
}

// Student Class that extends Person and implements multiple interfaces
class Student extends Person implements Greetable, Studyable, Playable {
  age: number;

  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }

  // Implementing the sayHello method from the Greetable interface
  sayHello(): void {
    console.log(`sayHello(): Hello, I am ${this.name}, and I am ${this.age} years old.`);
  }

  // Implementing the study method from the Studyable interface
  study(): void {
    console.log(`study(): ${this.name} is studying.`);
  }

  // Implementing the play method from the Playable interface
  play(): void {
    console.log(`play(): ${this.name} is playing a sport.`);
  }
}

// Usage
const student = new Student('Tom', 20);
student.sayHello();  // From Greetable interface
student.study();     // From Studyable interface
student.play();      // From Playable interface
student.walk();      // Inherited from Person class


 