// let arr = [
//   [10, 25, 3],
//   [45, 8, 60],
//   [12, 90, 20],
// ];

// let largest = -Infinity;
// let secondLargest = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     if (arr[i][j] > largest) {
//       secondLargest = largest;
//       largest = arr[i][j];
//     }
//   }
// }
// console.log(largest);
// console.log(secondLargest);

// let arr = [
//   [10, 25, 3],
//   [45, 8, 60],
//   [12, 90, 20],
// ];

// for (let i = arr.length - 1; i >= 0; i--) {
//   for (let j=0; j<arr.length; j++) {
//     console.log(arr[i][j]);
//   }
// }
// console.log("Hello, World!");

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for (let i=arr.lenght; i>=0; i--){
//     for (let j=arr.length-1; j>=0; j--){
//         console.log(arr[i][j])
//     }
// }

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for (let i=0; i<arr.length; i++){
//     console.log (arr[i][2])
// }

// for (let j = 0; j < arr[1].length; j++) {
//     console.log(arr[1][j]);
// }
// console.log ("-------------------")

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i][1]);
// }

// for (let j=0; j<arr.length; j++){
//     console.log(arr[2][j])
// }

// let arr = [
//   [10, 20, 30],
//   [40, 50, 60],
//   [70, 80, 90],
// ];

// for (let i = 0; i < arr.length; i++) {
//   let sum = 0;

//   for (let j = 0; j < arr[i].length; j++) {
//     sum += arr[i][j];
//   }
//   console.log(sum);
// }

let arr = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];

for (j = 0; j < arr.length; j++) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][j];
  }
  console.log(sum);
}
