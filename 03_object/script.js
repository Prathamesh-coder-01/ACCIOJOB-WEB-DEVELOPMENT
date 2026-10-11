console.log("Learning the Object in javascript day-2");
// let str = "tiger is running";

// let rev = str.split("").reverse().join("");
// console.log(rev);

// function reverseStr(str) {
//   let rev = str.split("").reverse().join("");
//   return rev;
// }
// console.log(reverseStr("Tiger is running "));

// let student = {
//   name: "Prathamesh",
//   age: 22,
//   brench: "Computer science",
// };

// console.log(student);
// student.name = "Shyam";
// console.log(student.name);

// let student = {
//   name: "Prathamesh",
//   age: 22,
//   bach: "10OBP",
//   brench: "Computer science",
//   printName() {
//     console.log("This is function name");
//     return student;
//   },
// };

// console.log(student.name);
// console.log(student.bach);
// // console.log(student.printName());
// student.printName();

// let person = {
//   person1: "Abhishek",
//   person2: "Dinesh",
//   person3: "Kartik",
// };

// let p= "person1";

// console.log (person[p]);

// let person = {
//   name: "Abhishek",
//   age: "23",
// };
// if (person.age >= 18) {
//   console.log("Person is Eligable");
// } else {
//   console.log("not eligable");
// }

// console.log(person.age > 18 ? "adult" : "Not adult");

//

// let person = {
//   name: "Abhishek",
//   age: "13",
//   isEligible() {
//     console.log("");
//   },
// };
// // person.isEligible();

// let key = "name";
// console.log(person[key]);

// let key1 = "name";
// let key2 = "age";
// let value1 = "Abhishek";
// let value2 = 10;

// let person = {
//   [key1]: value1,
//   [key2]: value2,
// };
// console.log(person);

// let person = {
//   firstname: "Abhishek",
//   lastname: "Dale",
//   age: 10,
//   city: "pune",
// };

// console.log(person);
// delete person.lastname
// console.log(person);
// person.age =30;
// console.log(person);
// person["hometown"]= "mystore";

// console.log (person);

// let person = {
//   name: "Abhishek",
//   city: "Pune",
//   age: 20,
// };
// for (let key in person) {
//   console.log(key);
// }

// for (let value in person) {
//   console.log(value);
// }

// for (let key in person) {
//   console.log(key, ":", person[key]);
// }

// let person = {
//   name: "Ram",
//   age: 20,
//   designation: "SDET",
//   salary: 2500,
//   gender: "male",
// };

// let count = 0;
// for (let key in person) {
//   count++;
// }

// console.log(count);

// let person = {
//   name: "Ram",
//   age: null,
//   designation: null,
//   salary: 2500,
//   gender: "male",
// };

// let count = 0;

// for (let key in person) {
//   if (person[key] !== null) {
//     count++;
//   }
// }
// console.log(count);

let person = {
  name: "Ram",
  age: null,
  designation: null,
  salary: 2500,
  gender: "male",
};

let check = "name";

// if (person[check]) {
//   console.log("key exist");
// } else {
// console.log("not exixt");
// }

console.log(check in person);


console.log (Object.hasOwn(person,check));

console.log ()