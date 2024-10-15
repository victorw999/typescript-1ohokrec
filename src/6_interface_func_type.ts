interface StringFormat {
  (str: string, isUpper: boolean): string
}

let f1, f2, f3, f4, f5: StringFormat;

//###
// The type annotations for the parameters are NOT necessary 
// but it enhance readability and maintainability
f1 = function (str: string, isUpper: boolean) {
  return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

f2 = function (str, isUpper) {
  return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

f3 = function (a, b) {
  return b ? a.toLocaleUpperCase() : a.toLocaleLowerCase();
};

f4 = function (a: string) {
  return a.toLocaleUpperCase()
};

f5 = function (a: number) {
  return a + 'testing'
};

console.log("f1:   ", f1('hi', true));
console.log("f2:   ", f2('hi', true));
console.log("f3:   ", f3('hi', true));
console.log("f4:   ", f4('hi'));
console.log("f5:   ", f5('hi'));


 



