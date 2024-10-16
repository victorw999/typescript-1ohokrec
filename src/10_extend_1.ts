"use strict"

interface Mailable {
  send(email: string): boolean
  queue(email: string): boolean
  // later(email:string, after:number):void
}

class Gmail implements Mailable {
  send(email: string): boolean {
    console.log(`Gmail send() ${email} : `, true)
    return true
  }
  queue(email: string): boolean {
    console.log(`Gmail queue() ${email} : `, true)
    return true
  }
}

class Hotmail implements Mailable {
  send(email: string): boolean {
    console.log(`Hotmail send() ${email} : `, true)
    return true
  }
  queue(email: string): boolean {
    console.log(`Hotmail queue() ${email} : `, true)
    return true
  }
}


let g1 = new Gmail()
g1.send('yawee@gmail.com')
g1.queue('hooah@gmail.com')


let h1 = new Hotmail()
h1.send('food@hot.com')
h1.queue('bar@hot.com')


////////////////////////////


interface A {
  a(): void
}

interface B extends A {
  b(): void
}

interface C {
  c(): void
}

// Interfaces extending multiple interfaces
interface D extends B, C {
  d(): void
}

class test_B implements B {
  a() { }
  b() { }
}

//
class test_D implements D {
  a(): void { }
  b(): void { }
  c(): void { }
  d(): void { }
}