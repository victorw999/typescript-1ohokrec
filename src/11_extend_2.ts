'use strict'

class A {
  // private members are not inherited by subclasses
  private secret: string = 'yoo'
  protected state: number = 123;  // Use 'protected' to allow access in subclasses
}

class subclass_A1 extends A {
  constructor() {
    super();  // Call the parent class's constructor
    this.state = 245;  // Access 'state' inherited from A
  //   this.secret =  '111'
  }
}

const obj = new subclass_A1();
console.log("subclass_A1", obj);  // Accessing obj will show the inherited state
console.log("subclass_A1", obj.state);

