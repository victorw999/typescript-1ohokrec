class Control {
  protected state: string = '';
  constructor(x: string) {
    this.state = x
  }
}
interface ActivatableControl extends Control{
  activate(): void;
}
class Button extends Control implements ActivatableControl {
  activate() {
    console.log('===> Button activate() , state: ', this.state)
  }
}
class TextBox extends Control implements ActivatableControl {
  activate() {
    console.log('===> TextBox activate(), state: ', this.state)
  }
}
class Label extends Control { }

// doesn't have "extends", 
// Dog is unrelated obj, dog is not a control
// Dog doesn't need a control to be activated
class Dog implements ActivatableControl {
  activate() {
    console.log('===> Dog activate(), state: ', this.state)
  }
}

let b1 = new Button('b1b1b1')
b1.activate()

let t1 = new TextBox('t1t1t1')
t1.activate()

let d1 = new Dog('d1d1d1')
d1.activate()






