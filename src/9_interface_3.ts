interface ClassExample {
  prop: string
  func(arg: number): string
}

interface FfunctionTypeExample {
  (arg: number): string
}

class test1 implements ClassExample {
  constructor(prop: string) {
    this.prop = prop
  }
  func(arg) {
    return 'this is func'
  }
}

console.log('===> ', new test1('testing...'))