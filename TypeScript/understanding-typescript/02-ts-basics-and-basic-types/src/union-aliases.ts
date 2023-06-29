// **************************************** Union Types
/* 
function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine('Max', 'Anna');
console.log(combinedNames);
*/

// **************************************** Literal Types
function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text', // literal type
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return resultConversion === 'as-number' ? +result : result.toString();
}

// const combinedAges = combine(30, 26, 'as-numbe'); // Argument of type '"as-numbe"' is not assignable to parameter of type '"as-number" | "as-text"'.
// console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
