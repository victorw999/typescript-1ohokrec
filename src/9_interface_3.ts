// #1
interface ClassExample {
  prop: string
  func(arg: number): string
}

// #2
interface FunctionTypeExample {
  (arg: number): string
}

// #1 use interface "ClassExample"
class test1 implements ClassExample {
  prop: string;
  constructor(prop: string) {
    this.prop = prop
  }
  func(arg: number) {
    return 'this is func: ' + arg
  }

  // #2 use interface "FunctionTypeExample"
  func2: FunctionTypeExample = (arg:number):string => {
    return 'this is func2: ' + arg;
  }
}

let t = new test1('testing...')

console.log('===> ', t)
console.log('===> ', t.func(111))
console.log('===> ', t.func2(222))