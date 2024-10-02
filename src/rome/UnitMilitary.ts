
import Unit from './Unit'

/// Game  Class
//https://totalwar.fandom.com/wiki/Principes_(Rome:_Total_War) 
export default class UnitMilitary implements Unit {
  name: string;
  id: number;
  size: number;
  defence: number;
  attack_power: number;

  constructor(name: string, size: number, defence: number, attack_power: number) {
    this.name = name;
    this.size = size;
    this.defence = defence;
    this.attack_power = attack_power;
    this.id = this.generateRandom10DigitNumber()
  }

  // gen randome id
  private generateRandom10DigitNumber() {
    const min = 1000000000; // 10-digit minimum
    const max = 9999999999; // 10-digit maximum  
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // Generate random damage based on attack_power and target's defence
  private getRandomDamage(target: Unit): number {
    const difference = this.attack_power - target.defence;
    
    // If the attack power is greater than defence, boost the probability of higher damage
    if (difference > 0) {
      // Probability-weighted higher damage output
      const baseDamage = Math.floor(Math.random() * this.attack_power);
      const bonus = Math.floor(Math.random() * difference); // More bonus with larger difference
      
      let output = Math.min(this.attack_power, baseDamage + bonus);

      // console.log(`111 difference:${difference} baseDamage:${baseDamage} bonus: ${bonus} output:${output}  `)

      return output
    } 
    // If the attack power is less than or equal to defence, reduce the probability of higher damage
    else {
      // Reduced damage probability when defence > attack power
      const penaltyFactor = 1 - Math.abs(difference) / target.defence; // Scale probability by how much higher defence is
      const baseDamage = Math.random() < penaltyFactor ? Math.floor(Math.random() * this.attack_power) : 0;
      // console.log(`222 difference:${difference}  baseDamage:${baseDamage} penaltyFactor: ${penaltyFactor}  `)

      return baseDamage;
    }
  }

  // Calculate size difference as a modifier for attack power
  private getSizeModifier(target: Unit): number {
    const sizeDifference = this.size - target.size;
  
    // Example modifier: If the attacking unit is larger, increase attack power slightly
    if (sizeDifference > 0) {
      return 1 + sizeDifference * 0.01;  // 1% bonus per unit of size difference
    } else {
      // Ensure the modifier is not negative, so it returns a minimum of zero
      return Math.max(0, 1 + sizeDifference * 0.02);  // 2% penalty per unit of negative size difference 
    }
  }
  

  // Implements the attack logic based on attack power and size difference
  attack(target: Unit): void {
    if (this.isDisabled()) {
      console.log(`${this.name} is disabled and cannot attack. `);
      return;
    }
  

    // Calculate random damage within the range of 0 to this unit's attack power
    let randomized_damage = this.getRandomDamage(target); 

    console.log(`
    ${this.name} attacks ${target.name}!  `);

    // Apply size modifier to damage
    const sizeModifier = this.getSizeModifier(target); 


    let modified_damage = randomized_damage * sizeModifier
    
    // console.log("\t  damage (randomized):   ", randomized_damage)
    // console.log("\t  sizeModifier:   ", sizeModifier)
    // console.log("\t  modified_damage:   ", modified_damage.toFixed(2)) 

 
    // Apply damage to the target's size
    let t_orig_size = target.size
    target.size = Math.max(0, target.size - Math.floor(modified_damage));

    console.log(`\t  ${target.name}'s remaining size changed:  ${t_orig_size} >>> ${target.size}.
    `);
  }

  // Implements the isDisabled method from the Unit interface
  isDisabled(): boolean {
    return this.size <= 0;  // A unit is considered disabled if its defence is 0 or below
  }

  print(): void {
    console.log(`\t  name: ${this.name} \t size: ${this.size}`)
  }
}
