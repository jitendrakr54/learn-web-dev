console.log('code goes here!');

const add = (...numbers: number[]) => {
  return numbers.reduce((acc, num) => acc + num, 0);
};

add(4);

// With below , we always have to pass an array
const add1 = (numbers: number[]) => {
  return numbers.reduce((acc, num) => acc + num, 0);
};

add1([2, 3]);
