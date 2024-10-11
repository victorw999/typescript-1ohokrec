// demo how a class "implements" a "interface"
interface Scaffold {
  propA: string;
  func(arg: number): void;
}

// "implements" is like adding meat to a bare-bones scaffolding
class Building implements Scaffold {
  propA: string;

  constructor(propA: string) {
    this.propA = propA;
  }
  func(arg: number) {}
}

let foo = new Building('xxx');
console.log(foo)