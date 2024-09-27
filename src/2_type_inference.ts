
//  hover your mouse cursor over the variable name. A tooltip will appear displaying the inferred type.
let items1 = [1, 2, 3, null]; // (number[])
let items2 = [0, 1, null, 'Hi']; // (number | string)[]
let arr = [new Date(), new RegExp('\d+')]; // (RegExp | Date)[].



// Contextual Typing
document.addEventListener('click', function (event) {
  console.log("===> PointerEvent: ",    event, event.button); //
});

// error: Property 'button' does not exist on type 'Event'.(2339)
document.addEventListener('scroll', function (event) {
  console.log('event.button: ', event, event.button);
});


window.onmousedown = function (event) {
  console.log("===> mouseEvent: ", event, event.button);
  //console.log(mouseEvent.kangaroo); //Property 'kangaroo' does not exist on type 'MouseEvent'.
};