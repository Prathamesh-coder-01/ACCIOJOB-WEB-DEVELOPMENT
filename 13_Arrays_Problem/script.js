// 1. Create an array containing 5 numbers and print all elements

// let arr = [1, 2, 3, 4, 5];
// console.log(arr); // [ 1, 2, 3, 4, 5 ]
// console.log(arr.length); // 5
// arr.push(6);
// console.log(arr); // [1,2,3,4,5,6]
// arr.unshift(0);
// console.log(arr); // [0,1,2,3,4,5,6]
// arr.pop();
// console.log(arr); // [ 0, 1, 2, 3, 4, 5 ]
// arr.shift();
// console.log(arr); // [ 1, 2, 3, 4, 5 ]
// console.log(arr[0]); // 1
// console.log(arr.at(-1)); // 5
// console.log(arr.includes(4)); // true

// console.log(arr.includes(6)); // false

// let rev = arr.reverse();
// console.log(rev); // [ 5, 4, 3, 2, 1 ]
//----------------------------------------------------------------------

/*
Find the largest number in an array.
*/

// let arr = [21, 12, 3, 15, 160, 7];

// let max = [0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log("Maximum num in arr is :", max);
// ----------------------------------------------------------------
/*
Find the smallest number in an array.
*/

// let arr = [121, 34, 5, 95, 57, 89];
// let min = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log("smaller num is :", min); //5
/*
----------------------------------------------------------
Calculate the sum of all numbers in an array.
*/

// let arr = [10, 20, 30, 40, 50];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }

// console.log(sum);
// ------------------------------------------------------

// Calculate the average of array elements.

// let arr = [10, 20, 30, 40, 50];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log("sum of arr is :", sum);
// let average = sum / arr.length;
// console.log("Avrage of arr is :", average);
//----------------------------------------------------------------

// Count how many even numbers are in an array.

// let arr = [1, 2, 3, 4, 5, 6, 10, 8];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     count++;
//     console.log(`The even number is ${arr[i]}`);
//   }
// }
// console.log(`and count is : ${count}`);
//-----------------------------------------------------------------------------
//  count odd numbers :
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//     count++;
//   }
// }
// console.log(count);
//--------------------------------------------------------------------

// let arr = [1, 11, 2, 12, 3, 13, 4, 14, 5, 15];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] >= 10) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);
//-----------------------------------------------------------------
// Remove duplicate values from an array.

// let arr = [1, 2, 1, 2, 3, 4, 3, 4, 5, 6, 5];
// let duplicate = [...new Set(arr)];
// console.log(duplicate);

// for (let num of arr) {
//   if (!duplicate.includes(num)) {
//     duplicate.push(num);
//   }
// }
// console.log(duplicate);

// ============================================================

// let arr = [1, 2, 1, 2, 3, 4, 5, 4];
// let duplicate = [];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j] && !duplicate.includes(arr[i])) {
//       duplicate.push(arr[i]);
//     }
//   }
// }
// console.log(duplicate);

// =============================================================
// Sort an array of numbers in ascending order.
// let arr = [5, 1, 3, 2, 4, 6, 8];
// let newArr = arr.sort((a, b) => b - a);
// console.log(newArr);

//=========================================================
// let arr = [5, 1, 3, 12, 4, 6, 8];

// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log("Largest num in arr is :", max);

//==========================================================
// let arr = [5, 11, 3, 12, 4, 6, 8];

// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log("smallest num in arr is :", min);

//=======================================================

// let arr = [2, 1, 5, 7, 9, 3, 4];
// let max = arr[0];
// let second = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     second = max;
//     max = arr[i];
//   }
// }
// console.log("second largest Num in arr is :", second);

// =====================================================================

// Find the frequency of each element in an array.

// let arr = [1, 1, 1, 2, 3, 2, 1, 3, 4, 3, 4, 5];

// let frequency = {};

// for (let i = 0; i < arr.length; i++) {
//   if (frequency[arr[i]]) {
//     frequency[arr[i]]++;
//   } else {
//     frequency[arr[i]] = 1;
//   }
// }

// console.log(frequency);

// concat two array ;

// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8];

// let result = arr1.concat(arr2);
// console.log(result);

// let result2 = [...arr1, ...arr2];
// console.log(result2);

//===========================================================

// let arr1 = [1, 2, 3, 4];
// let arr2 = [3, 4, 5, 6];

// let result = [...new Set([...arr1, ...arr2])];
// console.log(result);

/*
Find the frequency of each element in an array.
Find the intersection of two arrays.
Find the union of two arrays.
Rotate an array to the right by k positions.
Find the missing number from an array containing numbers from 1 to n.
Find all pairs whose sum equals a given number.
Flatten a nested array.
Find the longest string in an array.
Group objects in an array based on a property.
Find the most frequently occurring element.
*/
