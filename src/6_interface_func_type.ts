interface StringFormat {
  (str: string, isUpper: boolean): string
}

let formatFunc: StringFormat;

//###
// The type annotations for the parameters are NOT necessary 
// but it enhance readability and maintainability
// formatFunc = function (str: string, isUpper: boolean) {
//     return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
// };

// formatFunc = function (str, isUpper) {
//   return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
// };

// formatFunc = function (a, b) {
//   return b ? a.toLocaleUpperCase() : a.toLocaleLowerCase();
// };

// formatFunc = function (a: string) {
//   return a.toLocaleUpperCase() 
// };

// formatFunc = function (a: number ) {
//   return a + 'testing'
// };

console.log(formatFunc('hi', true));