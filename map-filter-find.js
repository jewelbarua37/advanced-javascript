// in Old system

const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// console.log(output);


// Map

// const square = element => element * element;
// const square = x => x * x;


// const result = numbers.map(function square(element){
//     return element * element;
//     // console.log(element, index, array);
// });


// const result = numbers.map(x=> x * x);
// console.log(result);


// Filter

const bigger = numbers.filter(x => x > 5);
console.log(bigger);


// Find

const isThere = numbers.find(x => x > 5);
console.log(isThere);