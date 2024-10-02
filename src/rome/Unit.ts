export default interface Unit {
  name: string; 
  size: number;
  defence: number; 
  attack_power:number;
  attack(target: Unit): void
  isDisabled(): boolean;
  print(): void;
}