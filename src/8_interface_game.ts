
/// Rome: Total War Game interface

import Unit from "./rome/Unit"
import UnitMilitary from "./rome/UnitMilitary"

let queue: Unit[] = []

function update() {
  console.log(' --------------------- ')
  queue.forEach(i => i.print())
  console.log('   ')
}

let a = new UnitMilitary('Principes_A', 144, 10, 10)
let b = new UnitMilitary('Principes_B', 174, 7, 8)

queue.push(a)
queue.push(b)

update()



for (let i = 0; i < 100; i++) {

  if (!(a.isDisabled() || b.isDisabled())) {
    console.log('======> isDisabled()?   ', a.isDisabled(), b.isDisabled())
    a.attack(b)
    update()

    b.attack(a)
    update()
  } else {

    console.log(' \n ===========>    i', i)
    break; 

  }

}