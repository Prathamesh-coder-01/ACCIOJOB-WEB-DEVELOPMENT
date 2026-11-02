// Time Complexcity And Space Complexcity
// ------------------------------------------------------------------------
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   console.log(i);
// } // Tc ->O(n)
// no of iteration -->5
// no of iteration -->7
// ------------------------------------------------------------------------

//3
// let num = 3;
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < num; j++) {
//     console.log("hello");
//   }
// } // Tc O(n^2)
// ------------------------------------------------------------------------
// 4
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     for (let k = 0; k < n; k++) {}
//   }
// } // tc--> O(n^3)

// ------------------------------------------------------------------------
//4
// while (n != 1) {
//   n = n / 2;
// }
// TC--> O(log2(n))

// --------------------- Binary search ---------------------------------

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let target = 7;

// function binarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] == target) {
//       return true;
//     } else if (arr[mid] > target) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return false;
// }
// console.log(binarySearch(arr, target));
//  T.C --> 0(log2(n))
//  S.C --> 0(1)
//--------------------------------------------------------------------------------

// let mat = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i = mat.length-1; i >= 0; i--) {
//   for (let j = 0; j <mat[i].length; j++) {
//     if(j==mat[i].length|| j==0)
//     console.log(mat[i][j]);
//   }
// }
// // console.log(mat[i][j])

let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// for (let i = 0; i < mat.length; i++) {
//   let mat1 = [];
//   for (let j = mat.length - 1; j >= 0; j--) {
//     mat1.push(mat[i][j]);
//   }
//   console.log(mat1);
// }

for (let i = mat.length - 1; i >= 0; i--) {
  let row = [];
  for (let j = 0; j < mat.length; j++) {
    row.push(mat[i][j]);
  }
  console.log(ro)
}
