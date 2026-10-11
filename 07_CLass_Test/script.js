// console.log(0 || "" || null || undefined || "hello" || 42);
// /*
// The || operator checks values from left to right and returns the first truthy value it finds.

// In JavaScript, these are falsy:

// 0 → falsy
// "" → falsy
// null → falsy
// undefined → falsy

// */

// // 2
// console.log("foo" && 10 && [] && 0 && "bar");
// /*

// &&--> returns the first falsy value it encounters.

// "foo" → truthy → continue
// 10    → truthy → continue
// []    → truthy → continue
// 0     → falsy  → STOP
// "bar" → never reached

// */

// // 3

// console.log(!!"false");

// // 4
// let a = 0;
// let b = 1;
// let c = 2;
// console.log(a || b && c);

// Create an object

// let student = {
//   name: "Rahul",
//   age: 21,
//   city: "Pune",
// };

// console.log(student);
// console.log(student.name);
// console.log(student["age"]);
// console.log((student.course = "Java"));
// // console.log(student);
// student.course = "MERN STACK";
// student.age = 90;
// console.log(student);

// delete student.age;
// delete student.course;
// console.log(student);

// student["age"] = 24;
// console.log(student);

// let students = {
//   name: "Rahul",
//   age: 21,
//   city: "Pune",
//   course: "MERN",
//   address: "Kannad Maharashtra",
// };

// for (let key in students) {
//   console.log(key, ":", students[key]);
// }

// for (let values in students) {
//   console.log(values, ":", students[values]);
// }

// console.log(Object.keys(students).length);

// for (let key in students) {
//   console.log(key, students[key].length);
// }

// console.log(Object.keys(students));

// console.log(Object.values(students));

// console.log(Object.entries(students));

// let student = {
//   name: "Rahul",
//   age: 21,
//   city: "Pune",
//   course: "MERN",
//   address: "Kannad Maharashtra",
// };

// for (let key in student) {
//   console.log(key, student[key].length);
// }

// console.log(Object.keys(student).length);
// console.log(Object.values(student).length);

// console.log(Object.keys(student));

// console.log("name" in student);

// console.log("shyam" in student);

// //////////////////////////////////////////////////////
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
//----------------------------------------------------------------------------------

// let num = 8954329;
// let count = 0;
// while (num > 0) {
//   let digit = num % 10;
//   num = Math.floor(num / 10);
//   if (digit % 2 !== 0) {
//     count++;
//   }
// }
// console.log(count);

//----------------------------------------------------------------------------------

// let num = 1234567;

// let count = 0;

// while (num > 0) {
//   count++;
//   num = Math.floor(num % 10);
// }
// console.log(count);

//----------------------------------------------------------------------------------

// let str = "Hello World Javascript";
// let Words = str.split(" ");
// let result = "";

// for (let Word of Words) {
//   result += Word.split("").reverse().join("") + " ";
// }

// console.log(result);
// // console.log(Words);

// const person = {
//   name: "Amit",
//   age: 25,
//   city: "Pune",
//   coures: "MERN",
// };

// let count = 0;

// for (let key in person) {
//   count++;
// }
// console.log(count);
// console.log(Object.keys(person));
// console.log(Object.keys(person).length);

// const person = {
//   name: "Amit",
//   age: 25,
//   city: "Pune",
//   coures: "Java",
// };

// for (let key in person) {
//   console.log(key, ":", person[key]);
// }

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// const person = {
//   name: "Amit",
//   age: 25,
//   city: "Pune",
//   coures: "Java",
// };

// let hasName = "name" in person;
// console.log(hasName);

// console.log("Kam" in person);

// const person = {
//   name: "Amit",
//   age: 25,
//   city: "Pune",
//   coures: "Java",
// };

// for (let key in person) {
//   console.log(key + ":" + person[key]);
// }

// let student = {
//   marathi: 88,
//   math: 90,
//   science: 70,
//   english: 77,
// };

// let sum = 0;

// sum = Object.values(student)

// console.log(sum);

