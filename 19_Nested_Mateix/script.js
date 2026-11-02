//Transpose matrix:
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i = 0; i < mat.length; i++) {
//   for (let j = 0; j < mat.length; j++) {
//     if (i < j) {
//       let temp = mat[i][j];
//       mat[i][j] = mat[j][i];
//       mat[j][i] = temp;
//     }
//   }
// }
// console.log(mat);
// //[ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ] ]

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let transpose = [];

// for (let i = 0; i < arr.length; i++) {
//   let row = [];
//   for (let j = 0; j < arr.length; j++) {
//     row.push(arr[j][i]);
//   }
//   transpose.push(row);
// }
// console.log(transpose);

//------------------------------------------------------------------------------------------
// Transpose matrix: What if mateix is REctungaler

// let matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];
// let Transpose = [];

// for (let j = 0; j < matrix[0].length; j++) {
//   let colItems = [];
//   for (let i = 0; i < matrix.length; i++) {
//     colItems.push(matrix[i][j]);
//   }
//   Transpose.push(colItems);
// }
// console.log(Transpose);
//----------------------------------------------------------------------
//[ [ 1, 5, 9 ], [ 2, 6, 10 ], [ 3, 7, 11 ], [ 4, 8, 12 ] ]

// Home work :
// Rotate Matrix degree clockwise
// zig zag traversal

//----------------------------------------------------------------------
// boundry traversal :
// let mat = [
//   [1, 2, 7],
//   [2, 5, 8],
//   [3, 6, 9],
// ];
// let top = 0;
// let bottom = 2;
// let left = 0;
// let right = 2;

// //Go from LEFT → RIGHT
// for (let col = left; col <= right; col++) {
//   console.log(mat[top][col]);
// }
// top++;

// // Go TOP → BOTTOM
// for (let row = top; row <= bottom; row++) {
//   console.log(mat[row][right]);
// }
// right--;

// // Go RIGHT → LEFT
// for (let col = right; col >= left; col--) {
//   console.log(mat[bottom][col]);
// }
// bottom--;

// // Go BOTTOM → TOP
// for (let row = bottom; row >= top; row--) {
//   console.log(mat[row][left]);
// }
// left++;

// ------------------------------------------------------------
// HOMEWORK SPIRALORDER

//------------------------------------------------------------
// SubArray \\
//------------------------------------------------------------
// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// let result = [];

// let str = "Akash";
// let k = 2;
// let result = [];
// for (let i = 0; i < str.length - k; i++) {
//   let sub = str.substring(i, i + k);
//   result.push(sub);
// }
// console.log(result);
//-----------------------------------------------------------
// Spiral Matrix

// let mat = [
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
//   [31, 61, 19],
// ];

// let left = 0;
// let right = mat[0].length - 1;
// let top = 0;
// let bottom = mat.length - 1;

// while (top <= bottom && left <= right) {
//   // Left to right for top row
//   for (let k = left; k <= right; k++) {
//     console.log(mat[top][k]);
//   }
//   top++;

//   // Top to bottom for right column
//   for (let k = top; k <= bottom; k++) {
//     console.log(mat[k][right]);
//   }
//   right--;

//   // Right to left for bottom row
//   if (top <= bottom) {
//     for (let k = right; k >= left; k--) {
//       console.log(mat[bottom][k]);
//     }
//     bottom--;
//   }

//   // Bottom to top for left column
//   if (left <= right) {
//     for (let k = bottom; k >= top; k--) {
//       console.log(mat[k][left]);
//     }
//     left++;
//   }
// }

// Matrix Addation :
// let A = [
//   [1, 2],
//   [3, 4],
// ];

// let B = [
//   [5, 6],
//   [7, 8],
// ];

// let C = [];

// for (let i = 0; i < A.length; i++) {
//   let row = [];

//   for (let j = 0; j < A.length; j++) {
//     row.push(A[i][j] + B[i][j]);
//   }
//   C.push(row);
// }
// console.log(C);

// -----------------------------------------------------------------------------

// Matrix Multiplication

// let A = [
//   [1, 2],
//   [3, 4],
// ];

// let B = [
//   [5, 6],
//   [7, 8],
// ];

// let C = [];

// for (let i = 0; i < A.length; i++) {
//   C[i] = [];
//   for (let j = 0; j < B[0].length; j++) {
//     C[i][j] = 0;

//     for (let k = 0; k < B.length; k++) {
//       C[i][j] += A[i][k] * B[k][j];
//     }
//   }
// }
// console.log(C);
