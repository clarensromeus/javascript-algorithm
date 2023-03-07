// accessing multi-dimensional arrays
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[0][0];

// printing out all elements of a multi-dimentional array
const printArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let output = 0;
for (let i = 0; i < printArray.length; i++) {
  for (let k = 0; k < printArray[i].length; k++) {
    output = printArray[i][k];
  }
}
// calculating the sum of a multidimensional array
const sumArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let result = 0;
for (let i = 0; i < printArray.length; i++) {
  for (let k = 0; k < printArray[i].length; k++) {
    output += printArray[i][k];
  }
}
