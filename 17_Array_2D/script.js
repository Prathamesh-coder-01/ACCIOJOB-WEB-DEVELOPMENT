// let student = {
//   Rahul: 85,
//   Amit: 92,
//   Priya: 78,
//   Neha: 88,
// };
// let highMatks = 0;
// for (let marks in student) {
//   if (student[marks] > highMatks) {
//     highMatks = student[marks];
//   }
// }
// console.log("Highest marks :", highMatks); // 92
//-------------------------------------------------------------
// let n =

// let arr = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];

// console.log(arr); // [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ] ]
//------------------------------------------------------------------------
//1. How to access an element arr[row][col];
// console.log(arr[0][1]); // 2
// console.log(arr[2][3]); // 12

//-------------------------------------------------------------------------
//2. Changing an Element in arrray :
// arr[1][2] = 100;
// console.log(arr);

//-----------------------------------------------------------------
// 3. Finding the Number Of Rows
// console.log(arr.length); //3
// console.log(arr[0].length); //4

// let arr = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];
////  4. find the row in arr
// console.log(arr.length); // 3
// // 5. Find the no of column
// console.log(arr[0].length); //4
// console.log(arr[1].length); //4
// console.log(arr[2].length); //4

// ===========================================
// Print all the items of the arrays
// From left to right
// let arr = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8, 9],
//   [9, 10, 11, 12],
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

//------------------------------------------------
//Print from right to left
// let arr = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8, 9],
//   [9, 10, 11, 12],
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = arr.length - 1; j >= 0; j--) {
//     console.log(arr[i][j]);
//   }
// }
//---------------------------------------------------------------
// Print row wise from last ro to first row right to left
// let arr = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];

// for (let i = arr.length - 1; i >= 0; i--) {
//   for (let j = arr[i].length - 1; j >= 0; j--) {
//     console.log(arr[i][j]);
//   }
// }
//----------------------------------------------------
// Print the diagonals of the matrix
let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 1, 1, 2],
  [9, 1, 1, 8],
];

let sum =0
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (i === j) {
      console.log(arr[i][j]);
    }
  }
}
// // op -> [1 6 11]
// //---------------------------------------------------

let mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 1, 1, 2],
  [1, 2, 3, 4],
];

for (let i = 0; i < mat.length; i++) {
  console.log(mat[i][i]);
}
