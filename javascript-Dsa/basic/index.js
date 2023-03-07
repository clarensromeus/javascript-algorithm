// get value in an array
const array = [1, 8, 5, 6, 9, 10];

array[0]; // 1 => you can get value from an array using array index

// sum of all value in an array
const sumarray = [1, 8, 5, 6, 9, 10];
let sum = 0;
for (let k = 0; k < sumarray.length; k++) {
  sum += sumarray[k];
}

// calcuting the product of an array
const productarray = [1, 8, 5, 6, 9, 10];
let product = 0;
for (let i = 0; i < sumarray.length; i++) {
  product += sumarray[i];
}

// getting min value from an array
const minarray = [1, 8, 5, 6, 9, 10];
let min = 0;
for (let j = 0; j < minarray.length; j++) {
  if (minarray[j] < min) {
    min = minarray[j];
  }
}

min; // print 1

// getting max value from an array
const maxarray = [1, 8, 5, 6, 9, 10];
let max = maxarray.length - 1;
for (let j = 0; j < maxarray.length; j++) {
  if (maxarray[j] > max) {
    max = maxarray[j];
  }
}

max; // print 10
