console.log('Your code goes here!');

// const button = document.querySelector('button')!;

// button.addEventListener('click', () => {
//   console.log('Clicked!');
// });

/* 
const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', () => {
    console.log('Clicked!');
  });
}
*/

const button = document.querySelector('button');

function clickHandler(message: string) {
  console.log('Clicked!', message);
}

if (button) {
  button.addEventListener('click', clickHandler.bind(null, "You're awesome"));
}
