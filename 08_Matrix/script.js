// ----------------------- Square Matrix -------------------------------------------
// let mat = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let row = 0; row < mat.length; row++) {
//   for (let col = 0; col < mat[0].length; col++) {
//     if (row < col) {
//       let temp = mat[row][col];
//       mat[row][col] = mat[col][row];
//       mat[col][row] = temp;
//     }
//   }
// }

// console.log(mat);

// --------------------------- Rectangle matrix ------------------------------
// let mat = [
//   [1, 4, 7, 10],
//   [2, 5, 8, 11],
//   [3, 6, 9, 12],
// ];

// let transpose = [];

// for (let col = 0; col < mat[0].length; col++) {
//   let colItem = [];
//   for (let row = 0; row < mat.length; row++) {
//     colItem.push(mat[row][col]);
//   }
//   transpose.push(colItem);
// }

// console.log(transpose);
// ---------------------- spiram matrix -----------------------
// let mat = [
//   [1, 4, 7, 1],
//   [2, 5, 8, 0],
//   [3, 6, 9, 5],
// ];
// let top = 0;
// let bottom = 2;
// let left = 0;
// let right = 3;

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
// console.log();

// -------------------- substring array ---------------------------
// let arr = [1, 2, 3, 4];

// let k = 3;

// for (let i = 0; i < arr.length - k + 1; i++) {
//   let subarray = [];
//   for (let j = i; j < i + k; j++) {
//     subarray.push(arr[j]);
//   }
//   console.log(subarray);
// }

// --------------------------- Substring string -----------------------
// given a substring find all substring of len k

// let str = "Akash";
// let k = 2;
// let result = [];
// for (let i = 0; i < str.length - k; i++) {
//   let sub = str.substring(i, i + k);
//   result.push(sub);
// }
// console.log(result);

//============================================================================
// let arr="akash"
// let k=3;
// for(let i=0; i<arr.length-k+1; i++){
//     let result=[];
//     let str=""
//     for(let j=i; j<i+k; j++){
//         str+=arr[j];
//     }
//     result.push(str);
//     console.log(result)
// }
//=======================================================================


let arr = [1, 2, 3, 4, 5];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  let subarray = [];
  for (let j = i; j < arr.length; j++) {
    subarray.push(arr[j]);
    // console.log(subarray);
    count++;
  }
}
console.log(count);

// spiral order , rotate , 