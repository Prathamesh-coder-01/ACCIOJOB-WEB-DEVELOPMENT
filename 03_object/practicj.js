// let person = {
//   name: "Ram",
//   age: 24,
//   city: "pune",
// };

// console.log(person);

// let person = new object();
// person.name = "Prathamesh";
// person.age = 25;
// person.city = "New York";

// console.log(person);

// console.log(person.name);
// console.log(person["name"]);

// let key = "city";
// console.log(person[key]);

// person.country = "India";
// console.log(person);

// person["job"] = "developre";
// console.log(person);

// person.age = 30;

// person["city"] = "mumbai";
// console.log(person);

// let key = "name";
// console.log(person[key]);

// Create
// let person = {
//   name: "Ram",
//   age: 24,
//   city: "pune",
// };

// // read the object
// console.log(person);
// console.log(person.name);

// // add the new property in onject
// person.country = "India";
// console.log(person);
// person["job"] = "developer";

// // update object
// person.age = 30;
// console.log(person);

// delete person.job;
// console.log(person);

// delete person.country;
// console.log(person);

// function call back methiod

// let person = {
//   name: "Ram",
//   age: 24,
//   city: "pune",
//   country: "India",
//   function() {
//     console.log("Hello my name is: ", this.name);
//     console.log("and my age is :", this.age);
//   },
// };

// console.log(person.age);
// person.function();

// let person = {
//   name: "Ram",
//   age: 24,
//   city: "pune",
//   country: "India",
// };
// for (let key in person) {
//   console.log(key, ":", person[key]);
// }

// const student = {
//   name: "John",
//   marks: {
//     math: 90,
//     science: 95,
//   },
// };

// console.log(student.name);
// console.log(student.marks.math);

// // Practice questiona and ans \\\

// let student = {
//   name: "Prathamesh",
//   age: 23,
//   course: "Full stack Development",
// };

// console.log(student);
// console.log(student.name);
// console.log(student.age);
// console.log(student.course);

// student.city = "Pune";
// student["citys"] = "mumbai";
// console.log(student);
// console.log(student.citys);

// student.age = 30;
// console.log(student.age);

// delete student.citys;
// console.log(student);

// delete student.city;
// console.log(student);

// let student = {
//   name: "Prathamesh",
//   age: 23,
//   course: "Full stack Development",
//   city: "pune",
// };

// console.log([student.name]);
// console.log(student["name"]);

// let count = 0;
// for (let key in student) {
//   console.log(key, ":", student[key]);
//   count++;
// }
// console.log(count);

// console.log(Object.keys(student));

// console.log(Object.values(student));

// let student = {
//   name: "Prathamesh",
//   age: 23,
//   course: "Full stack Development",
//   city: "pune",
//   country: " India",
// };

// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(Object.entries(student));

// for (let keys in student) {
//   console.log(keys, ":", student[keys]);
// }

// let count = 0;
// for (let key in student) {
//   count++;
// }
// console.log(count);

// console.log(Object.keys(student).length);

let student = {
  name: "Prathamesh",
  age: 23,
  course: "Full stack Development",
  city: "pune",
  country: " India",
};

console.log("age" in student);
console.log("name" in student);













