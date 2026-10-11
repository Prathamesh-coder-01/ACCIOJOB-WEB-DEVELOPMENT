// let str = "Hello";
// let rev = str.split("").reverse().join("");
// console.log(rev);

// let str = "Hello";

// let result = "";

// for (let i = str.length - 1; i <= 0; i--) {
//   result += str[i];
// }
// console.log(result);

// let str = "MADAM";

// let rev = str.split("").reverse().join("");
// console.log(rev);

// if (rev === str) {
//   console.log(`The given string ${str} is Palindrome`);
// } else {
//   console.log(`The given string ${str} is Not a Palindrome`);
// }

// let num = 18;
// let isPrime = true;

// if (num < 2) {
//   isPrime = false;
// }

// for (let i = 2; i <= num; i++) {
//   if (num % 2 === 0) {
//     isPrime = false;
//     break;
//   }
// }
// if (isPrime) {
//   console.log("Is a prime number");
// } else {
//   console.log("Is Not a prime number ");
// }

// let num = 5;

// let fact = 1;

// for (let i = 1; i <= num; i++) {
//   fact = fact * i;
// }
// console.log(fact);

// let num = 8;

// let a = 0;
// let b = 1;

// for (let i = 0; i <= num; i++) {
//   console.log(a);
//   let next = a + b;
//   a = b;
//   b = next;
// }

// Frequency counting
// let arr = [1, 2, 3, 4, 2, 2, 5, 3];
// let target = 2;
// let count = 0;
// for (let num of arr) {
//   if (num === target) {
//     count++;
//   }
// }
// console.log(count);

//   Remove duplicates
// let arr = [1, 2, 3, 1, 2, 3, 4, 5, 6, 7];
// let result = [];
// for (let num of arr) {
//   if (!result.includes(num)) {
//     result.push(num);
//   }
// }
// console.log(result);

// Find largest/smallest in array
// let arr = [10, 20, 30, 4, 40, 500];

// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);

// let arr = [10, 20, 30, 4, 40, 500];
// let min = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log(min);

// Remove duplicates

// let arr = [1, 2, 3, 1, 2, 4, 5, 6, 2];

// let result = [];

// for (let num of arr) {
//   if (!result.includes(num)) {
//     result.push(num);
//   }
// }
// console.log(result);
// console.log(arr);

// Count frequency of elements

// let arr = [1, 2, 1, 2, 3, 2, 4, 5, 6, 2];

// let target = 2;
// let count = 0;

// for (let num of arr) {
//   if (num === target) {
//     count++;
//   }
// }
// console.log(count);

// let arr = [1, 2, 1, 2, 3, 2, 4, 5, 6, 2];

// let result = [...new Set(arr)];
// console.log(result);

// let str = "Hello I Love Javascript Language";
// let count = 0;
// let vowels = "AEIOUaeiou";

// for (let ch of str) {
//   if (vowels.includes(ch)) {
//     count++;
//   }
// }
// console.log(count);

// // Reverse an array

// let arr = [1, 2, 3, 4, 5];
// let result = arr.reverse();
// console.log(result);

// let rev = [];

// for (let i = arr.length - 1; i > 0; i--) {
//   rev += arr[i];
// }
// console.log(rev);

// for (let i = 1; i <= 30; i++) {

//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// let Student = {
//   name: "Amit",
//   age: 23,
//   city: "Pune",
// };

// console.log(Student);

// console.log(Student.name);
// console.log(Student["age"]);
// console.log(Student["city"]);

// console.log((Student.Coures = "MERN"));
// console.log(Student);

// Student.hight = "5.6cm";
// console.log(Student);

// Student.name = "Prathamesh";
// console.log(Student);

// delete Student.hight;
// console.log(Student);

// delete Student.Coures;
// console.log(Student);

// let Student = {
//   name: "Amit",
//   age: 23,
//   city: "Pune",
//   course: "MERN Stack",
//   height: "5.6 cm",
// };

// for (let key in Student) {
//   console.log(key, ":", Student[key]);
// }

// let result = Object.keys(Student);
// console.log(result);

// let res = Object.values(Student);
// console.log(res);

// let result = Object.entries(Student);
// console.log(result);

// let Student = {
//   name: "Amit",
//   age: 23,
//   city: "Pune",
//   course: "MERN Stack",
//   height: "5.6 cm",
// };

// let count = 0;

// for (let key in Student) {
//   count++;
// }

// console.log(count);

// let count1 = Object.keys(Student).length;
// console.log(count1);
