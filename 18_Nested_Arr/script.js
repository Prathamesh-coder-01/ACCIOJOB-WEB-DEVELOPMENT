// Print the diagonal Of the Matrix

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i = 0; i < matrix.length; i++) {
//   console.log(matrix[i][i]);
// }

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     if (i === j) {
//       console.log(matrix[i][j]);
//     }
//   }
// } // OP => 1 5 9

//-------------------------------------------------------
// Print all the items of the matrix Column wise
// let mat = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];

// for (let j = 0; j < mat.length; j++) {
//   for (let i = 0; i < mat.length; i++) {
//     console.log(mat[i][j]);
//   }
// }
//-----------------------------------------------------

// Print the boundry items of the matrix
//.....................
// let mat = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];

// for (let i = 0; i < mat.length; i++) {
//   for (let j = 0; j < mat.length; j++) {
//     if (i == 0 || i == mat.length - 1

//     ) {
//       console.log(mat[i][j]);
//     }
//   }
// }
// //----------------------------------------------------
//Print the highest element from matrix
// let mat = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];
// let maxElement = 0;

// for (let i = 0; i < mat.length; i++) {
//   for (let j = 0; j < mat[i].length; j++) {
//     if (maxElement < mat[i][j]) {
//       maxElement = mat[i][j];
//     }
//   }
// }
// console.log(maxElement); //16
//---------------------------------------------------------------------
// Given square Matrix of Secondary Diagonal from bottom to top

// let arr = [
//   [1, 2, 3],
//   [2, 4, 5],
//   [7, 8, 5],
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     if (i + j == arr.length - 1) {
//       console.log(arr[i][j]);
//     }
//   }
// } //7 4 3

//----------------------------------------------------------
// Print all The diagonals of the secondary from the bottom to top
// let mat = [
//   [1, 2, 9],
//   [3, 4, 8],
//   [5, 6, 7],
// ];

// for (let i = mat.length - 1; i >= 0; i--) {
//   for (let j = 0; j < mat[i].length; j++) {
//     if (i + j == mat.length - 1) {
//       console.log(mat[i][j]);
//     }
//   }
// } // 5 4 9
//-------------------------------------------------------------------
// Transpose matrix:
// :--> Row converts to column
//:-->column converts to row
// Given a square matrix :
// let mat = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i = 0; i < mat.length; i++) {
//   for (let j = 0; j < mat[i].length; j++) {
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
//   [10, 2, 20],
//   [2, 5, 9],
//   [100, 23, 76],
// ];

// let maximum = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     if (arr[i][j] > maximum) {
//       maximum = arr[i][j];
//     }
//   }
// }
// console.log(maximum);

//----------------------------------------------------------

// let arr = [4, 1, 8, 3, 6];
// let target = 3;
// let found = false;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === target) {
//     found = true;
//   }
// }
// console.log(found); // True

// function linearSearch(arr, target) {
//   for (let item of arr) {
//     if (item == target) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(linearSearch(arr, target));

// 1. Print the Prymaid pattern:
function printPrymaid(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      row += "*";
    }
    console.log(row);
  }
}
printPrymaid(4);

// 2 Print Coloum wise matrix:
let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function printColum(mat) {
  let result = [];

  for (let j = 0; j < mat[0].length; j++) {
    for (let i = mat.length - 1; i >= 0; i--) {
      result.push(mat[i][j]);
    }
  }
  console.log(result);
}
printColum(mat);


