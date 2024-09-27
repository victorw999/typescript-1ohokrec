let skill: [string, number];
skill = ['Programming', 5];

// skill = [1, "hooah"] // not allowed to change order

console.log('typeof skill ', typeof skill);
console.log('typeof skill[0] ', typeof skill[0]);
console.log('typeof skill[1] ', typeof skill[1]);

let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];

console.log('bgColor: ', bgColor);
console.log('headerColor: ', headerColor);
