//  Find largest number in arr :

// let arr = [1, 2, 3, 4, 5];
// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log("The maximum num is :", max); // 5

// reverse the string :

// let str = "Hello world";

// let rev = str.split("").reverse().join("");
// console.log(rev);

// count vowels in string :

// let str = "javasctipt";
// let vowels = "aeiou";
// let count = 0;

// for (let ch of str) {
//   if (vowels.includes(ch)) {
//     count++;
//   }
// }
// console.log(count);

// find Factorial ;

// let num = 5;
// let fact = 1;

// for (let i = 1; i <= num; i++) {
//   fact = fact * i;
// }
// console.log(fact);

// check Prime number :

// let num = 78;
// let isPrime = true;

// if (num <= 1) {
//   isPrime = false;
// } else {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }
// console.log(isPrime);

//  print n number prime number :

// for (let num = 2; num <= 100; num++) {
//   let isPrime = true;
//   for (let i = 2; i < Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(num);
//   }
// }

// let student = {
//   name: "Ram",
// };

// student.age = 20;
// student.city = "Pune";

// console.log(student);

// let arr = [1, 1, 2, 3, 2, 4, 3, 5, 3];
// let result = [];

// for (let num of arr) {
//   if (!result.includes(num)) {
//     result.push(num);
//   }
// }
// console.log(result);

// let result1 = [...new Set(arr)];
// console.log(result1);

// largest num

// let arr = [10, 20, 30, 40, 50];

// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// console.log("Maximum Num is :", max);

// let arr = [10, 20, 30, 40, 50];
// let max = arr[0];
// let second = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     second = max;
//     max = arr[i];
//   }
// }
// console.log("second largest num is : ", second);

// count even number

// let arr = [1, 2, 3, 4, 6];
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//     count++;
//   }
// }
// console.log(count);

// reverse arr

// let arr = [1, 2, 3, 4, 5];
// let rev = 0;

// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

// let rev = arr.reverse(arr);
// console.log(rev);

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// let arr = [1, 2, 3, 4, 5];
// let found = arr.includes(5);
// console.log(found);

// let num = 12345;

// let rev = 0;
// while (num > 0) {
//   let digit = num % 10;
//   rev = rev * 10 + digit;
//   num = Math.floor(num / 10);
// }

// console.log(rev);

//
