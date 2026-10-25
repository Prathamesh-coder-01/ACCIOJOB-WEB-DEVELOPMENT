/*
 *********
 *******
 *****
 ***
 *
 */
// let num = 5;
// for (let i = num; i >= 1; i--) {
//   let str = "";
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     str += "*";
//   }
//   console.log(str);
// }
//----------------------------------------------------------------------

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

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let str = " ";
//   for (let j = 1; j <= n; j++) {
//     if (i == 1 || i == n || j == 1 || j == n) {
//       str += "*";
//     } else {
//       str += " ";
//     }
//   }
//   console.log(str);
// }
/*

* * * * *
*       *
*       * 
*       *
* * * * *
*/
//------------------------------------------------------------------------

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6, 3, 4],
//   [7, 8, 9],
// ];
// using arr[1],arr[0] we are accessing the rows of the arr
// console.log(arr[1]); // [ 4, 5, 6 ]
// console.log(arr[0]); //[ 1, 2, 3 ]
// console.log(arr[0][2]); //3
// console.log(arr[2][1]); // 8
// console.log(arr[0][0]); // 1

// // no of rows
// console.log(arr.length); // 3

// // no of colume:
// console.log(arr[0].length); //3

//---------------------------------------------
// console.log(arr[0]); //1,2,3
// console.log(arr[0].length); //3
// // console.log(arr[1]); // 4,5,6,3,4
// console.log(arr[1].length); //5

//-----------------------------------------------------
// Print the row from left to right
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6, 3, 4],
//   [7, 8, 9],
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }
//==> OP : 1,2,3,4,5,6,3,4,7,8,9
//---------------------------------------------------
// Print the arr  from right to left
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = arr[i].length - 1; j >= 0; j--) {
//     console.log(arr[i][j]);
//   }
// }
// ==> OP : :3,2,1,6,5,4,9,8,7

//---------------------------------------------------------------
//Print the arr rowwise from last to first row left to rigth:
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// for (let i = arr.length - 1; i >= 0; i--) {
//   for (let j = 0; j <= arr[i].length - 1; j++) {
//     console.log(arr[i][j]);
//   }
// } // ==> OP : 7,8,9,4,5,6,1,2,3

//--------------------------------------------------------------
// given the aquare Matrix Find the Diagonal Items

// let matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [5, 4, 6, 9],
// ];

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[0].length; j++) {
//     if (i === j) {
//       console.log(matrix[i][j]);
//     }
//   }
// } // 1,6,11,9

// let student = {
//   name: "Ram",
// };
// function getKey(obj) {
//   return Object.keys(obj);
// }
// console.log(student);
