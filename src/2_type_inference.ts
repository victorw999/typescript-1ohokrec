
//  hover your mouse cursor over the variable name. A tooltip will appear displaying the inferred type.
let items1 = [1, 2, 3, null]; // (number[])
let items2 = [0, 1, null, 'Hi']; // (number | string)[]
let arr = [new Date(), new RegExp('\d+')]; // (RegExp | Date)[].




document.addEventListener('click', function (event) {
  console.log('click event.button: ', event, event.button); //
});

// error: Property 'button' does not exist on type 'Event'.(2339)
document.addEventListener('scroll', function (event) {
  console.log('event.button: ', event, event.button);
});
