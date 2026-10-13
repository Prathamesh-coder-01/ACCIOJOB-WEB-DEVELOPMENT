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
//     // console.log (ch)
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

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// find the even  num;

// let arr = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     console.log(arr[i]);
//   }
// }

// let arr = [1, 2, 3, 4, 5, 6];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//     count++;
//   }
// }
// console.log(count);

// sum of arr

// let arr = [10, 20, 30];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// console.log(sum);

// let arr = [10, 20, 30, 40];
// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);

// minimum number

// let arr = [10, 20, 30, 40];
// let min = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log(min);

// find second largest:

// let arr = [10, 20, 30, 40, 50];
// let max = arr[0];
// let second = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     second = max;
//     max = arr[i];
//   }
// }
// console.log(second);

//  reverse an array

// let arr = [10, 20, 30, 40, 50, 60];

// let rev = arr.reverse(arr);
// console.log(rev);

// let rev = 0;
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

//  remove duplicate:

// let arr = [1, 2, 3, 1, 2, 3, 4, 5];
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//   if (!result.includes(arr[i])) {
//     result.push(arr[i]);
//   }
// }
// console.log(result);

// [1, 2, 3, 4], [3, 4, 5, 6]))

// let arr1 = [1, 2, 3, 4];
// let arr2 = [3, 4, 5, 6];

// let result = [];
// for (let num of arr1) {
//   if (arr2.includes(num) && !result.includes(num)) {
//     result.push(num);
//   }
// }
// console.log(result);

// let student = [
//   { name: "Om", salary: 30000 },
//   { name: "Raj", salary: 40000 },
//   { name: "Amit", salary: 50000 },
//   { name: "Rahul", salary: 35000 },
// ];

// for (let i = 0; i < student.length; i++) {
//   console.log(student[i].name, student[i].salary);
// }

// student.sort((a, b) => b.salary - a.salary);
// console.log(student);

// let student = {
//   name: "Rahul",
//   rollNo: 101,
//   marks: {
//     maths: 85,
//     science: 90,
//     english: 78,
//     computer: 88,
//   },
// };

// student.tottalMarks =
//   student.marks.maths +
//   student.marks.science +
//   student.marks.english +
//   student.marks.computer;

// // console.log(student);
// console.log("Total marks :", student.tottalMarks);
// let avrage = student.tottalMarks / 4;
// console.log(avrage);

// let student = [
//   { name: "Amit", maths: 78, science: 82, english: 90 },
//   { name: "sneha", maths: 88, science: 75, english: 86 },
//   { name: "Ravi", maths: 98, science: 90, english: 85 },
// ];

// for (let i = 0; i < student.length; i++) {
//   let tottalMarks =
//                 student[i].maths +
//                 student[i].science +
//                 student[i].english;

//   let avrage = tottalMarks / 3;
//   console.log("Name :", student[i].name);
//   console.log("Totalmarks", tottalMarks);
//   console.log("Avrage :", avrage);
// }
// -------------------------------------------------------------------
// let people = [
//   { name: "Neha", age: 25 },
//   { name: "Rahul", age: 20 },
//   { name: "Shyam", age: 19 },
//   { name: "Priya", age: 24 },
// ];

// let oldest = people[0];
// let youngest = people[0];

// for (let i = 0; i < people.length; i++) {
//   if (people[i].age > oldest.age) {
//     oldest = people[i];
//   }
//   if (people[i].age < youngest.age) {
//     youngest = people[i];
//   }
// }
// console.log("Oldest", oldest);
// console.log("Oldest", youngest);

// // ---------------------------------------------------------------
// let student = [
//   { name: "Neha", age: 25 },
//   { name: "Rahul", age: 20 },
//   { name: "Shyam", age: 19 },
//   { name: "Priya", age: 24 },
// ];

// let totalAge = 0;
// for (let i = 0; i < student.length; i++) {
//   totalAge = totalAge + student[i].age;
// }
// console.log("totalAge", totalAge);
// let avrage = totalAge / student.length;
// console.log("Avrage:", avrage);

const employees = {
  Rahul: 30000,
  Amit: 50000,
  Priya: 45000,
  Abhishek: 70000,
};

let highSalary = 0;
let lowSalary = Infinity;

for (let employe in employees) {
  if (employees[employe] > highSalary) {
    highSalary = employees[employe];
  }
  if (employees[employe] < lowSalary) {
    lowSalary = employees[employe];
  }
}
console.log("Higherst Salary =", highSalary);
console.log("lowest salary =", lowSalary);

// let highSalary = 0;
// let employeesName = "";

// for (let key in employees) {
//   if (employees[key] > highSalary) {
//     highSalary = employees[key];
//     employeesName = key;
//   }
// }

// console.log(employeesName);
// console.log(highSalary);

// const users = [
//   { name: "Rahul", age: 22 },
//   { name: "Amit", age: 16 },
//   { name: "Priya", age: 25 },
//   { name: "Neha", age: 15 },
// ];
// let highAge = 0;

// for (let i = 0; i < users.length; i++) {
//   if (users[i].age > highAge) {
//     highAge = users[i].age;
//   }
// }
// console.log(highAge);

// // for (let user of users) {
// //   if (user.age > highAge) {
// //     highAge = user.age;
// //   }
// // }
// // console.log(highAge);

// // let obj1 = {
// //   name: "Pranav",
// //   age: 23,
// // };

// // let obj2 = {
// //   city: "pune",
// // };

// let result = { ...obj1, ...obj2 };
// console.log(result);

// let res = Object.assign({}, obj1, obj2);
// console.log(res);

// const employees = {
//   Rahul: 30000,
//   Amit: 50000,
//   Priya: 45000,
//   Abhishek: 70000,
// };

// let totalSalary = 0;

// for (let employee in employees) {
//   totalSalary += employees[employee];
// }
// console.log(totalSalary);
// let avrage = totalSalary / 4;
// console.log(avrage);

// // let highSalary = 0;

// // for (let employe in employees) {
// //   if (employees[employe] > highSalary) {
// //     highSalary = employees[employe];
// //   }
// // }
// // console.log(highSalary);

// const employees = [
//   { name: "Rahul", department: "IT" },
//   { name: "Amit", department: "HR" },
//   { name: "Priya", department: "IT" },
//   { name: "Abhishek", department: "Sales" },
//   { name: "Neha", department: "HR" }
// ];

// let count=0;

// for (let employe in employees){
//   let dep =employees.department;

// if (detmentCount[dep])
// }
