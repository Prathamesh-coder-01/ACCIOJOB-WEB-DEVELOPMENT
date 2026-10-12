// let arr = [2, 4, 6, 8, 10, 12, 14];
// let target = 10;

// let left = 0;
// let right = arr.length - 1;

// while (left <= right) {
//   let mid = Math.floor((left + right) / 2);

//   if (arr[mid] === target) {
//     console.log(mid);
//     break;
//   } else if (arr[mid] < target) {
//     left = mid + 1;
//   } else {
//     right = mid - 1;
//   }
// }

//////////////////////////////////////////////////////////

// const student = {
//   name: "Amit",
//   marks: 80,
// };
// const { name, marks } = student;
// console.log(name, marks);

// add
// student.city = "Pune";
// console.log(student);

// deleat
// delete student.city;
// console.log(student);

//

// const employee = {
//   name: "Amit",
//   salary: 50000,
// };

// employee.department = "Full stack Developer";
// console.log(employee);

// employee.salary = 60000;
// console.log(employee);

// delete employee.department;
// console.log(employee);

// const employee = {
//   name: "Abhishek",
//   location: {
//     city: "Mumbai",
//     country: "India",
//   },
// };
// console.log(employee.location.city);

// employee.location = "Pune";
// console.log(employee);

// const person = {
//   name: "Raj",
//   greet() {
//     return (Hello, $(this.name));
//   },
// };
// console.log(person.greet);

// const obj1 = { name: "A" };
// const obj2 = obj1;

// obj2.name = "B";

// console.log(obj1.name);

// const employee = {
//   Abhishek: 50000,
//   shyam: 40000,
//   kunal: 35000,
//   Kartik: 70000,
// };

// let max = 0;
// let employeeName = "";
// for (salary in employee) {
//   if (employee[salary] > max) {
//     max = employee[salary];
//     employeeName = salary;
//   }
// }
// console.log(employeeName, ":", max);

// console.log(a);
// var a = 10;

// const pi = 3.14;
// pi = 4;
// console.log(pi);

// var a;
// a = 10;
// console.log(a);

const employee = {
  Abhishek: 50000,
  shyam: 40000,
  kunal: 35000,
  Kartik: 70000,
};

let student = {
  name: "Om",
  marks: 56,
};
if (student.marks >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// --------------------------------------------------

// let num = 7;
// let count = 0;

// for (let i = 0; i <= num; i++) {
//   if (num % i === 0) {
//     count++;
//   }
// }

// if (count === 2) {
//   console.log("Prime Number");
// } else {
//   console.log("Not Prime");
// }


