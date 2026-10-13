// let arr = [10, 30, 3, 36, 50, 7, 100];

// let small = Infinity;
// let second = Infinity;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < small) {
//     second = small;
//     small = arr[i];
//   } else if (arr[i] < second && arr[i] !== small) {
//     console.log(second);
//   }
// }
//-----------------------------------------------------------------------------

// let str = "Javascript";
// let vowels = "aeiou";
// let count = 0;

// for (let ch of str) {
//   if (vowels.includes(ch)) {
//     count++;
//   }
// }
// console.log(count);

// const user = {
//   name: "Raj",
//   city: "Pune",
// };

// console.log(user.name);
// console.log(user["city"]);

// const student = {
//   name: "Priya",
//   address: {
//     city: "Pune",
//     pincode: 411001,
//   },
// };
// console.log(student.address.city);

// const users = [
//   { id: 101, name: "Amit" },
//   { id: 102, name: "Rahul" },
//   { id: 103, name: "Priya" },
// ];

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i].id, users[i].name);
// }

// const employees = [
//   { name: "A", department: "IT" },
//   { name: "B", department: "HR" },
//   { name: "C", department: "IT" },
//   { name: "D", department: "HR" },
// ];

// let grouped = {};
// for (let i = 0; i < employees.length; i++) {
//   let department = employees[i].department;

//   if (!group[department]) {
//     grouped[department] = [];
//   }
//   grouped[department].push(employee[i].name);
// }
// console.log(grouped);

// let num = 12;

// let isPrime = true;

// if (num <= 1) {
//   isPrime = false;
// } else {
//   for (let i = 2; i <= num; i++) {
//     if (num % 2 === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }
// console.log(isPrime);

//  print prime till n Number:

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

// let num = 1211;
// let original = num;

// let rev = 0;
// while (num > 0) {
//   let digit = num % 10;
//   rev = rev * 10 + digit;
//   num = Math.floor(num / 10);
// }
// console.log(rev);

// if (original === rev) {
//   console.log("Palindrome number");
// } else {
//   console.log("Not a Palindrome");
// }

// Find the sum of arr;

// let arr = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     sum += arr[i];
//   }
// }
// console.log(sum);

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let sum = 0;
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//     sum += arr[i];
//     count++;
//   }
// }
// console.log(sum);
// console.log(count);

// reverse the arr

// let arr = [10, 20, 30, 40, 50];
// let rev = arr.reverse(arr);
// console.log(rev);

// let arr = [10, 20, 30, 40, 50];

// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// console.log(max);

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

// let num = 12345;
// let sum = 0;

// while (num > 0) {
//   sum += num % 10;
//   num = Math.floor(num / 10);
// }
// console.log(sum);

// let employee = [
//   { name: "ram", salary: 40 },
//   { name: "shyam", salary: 30 },
//   { name: "kam", salary: 60 },
// ];

// employee.sort((a, b) => a.salary - b.salary);
// console.log(employee);

// employee.sort((a, b) => b.salary - a.salary);
// console.log(employee);

// const a = { name: "John" };
// const b = a;
// b.name = "Alex";
// console.log(a.name); // "Alex"
  

