// Create an object representing a person with name, age, and city.

// let person = {
//   name: "Rahul",
//   age: 23,
//   city: "Pune",
//   course: "MERN Stack",
// };
// console.log(person); // Print Obj
// console.log(person.name); // Accis the name
// console.log(person["age"]); // print the age
//-------------------------------------------------------------
// person.course = "MERN Stack";
// console.log(person.course); // add New Property
//-----------------------------------------------------

// person.age = 25;
// console.log(person.age); // Update property
//--------------------------------------------------------

// delete person.course;
// console.log(person); //Deleat property
//====-----------------------------------------------------------

// console.log("age" in person); // True | // Check Property Exists:
// console.log("course" in person);// False // Check Property Exists:
//-------------------------------------------------------

// console.log(Object.keys(person).length);
//Find the length of The properties PErson
//------------------------------------------------------

// for (let key in person) {
//   console.log(key);
// } // Using for Loop
// console.log(Object.keys(person)); // Using Build in Method
//------------------------------------------------------------------

// console.log(Object.values(person)); // Print All the values Of the Object

//------------------------------------------------------------------------------

// Print all the keys and values Of Person
// for (let key in person) {
//   console.log(key, ":", person[key]);
// }
// console.log(Object.entries(person));
//=========================================================

// let marks = {
//   math: 80,
//   science: 75,
//   english: 90,
//   computer: 55,
// };

// let total = 0;

// for (let subject in marks) {
//   total += marks[subject];
// }
// console.log(total); // Output: 245
//--------------------------------------------------

// let marks = {
//   math: 80,
//   science: 75,
//   english: 90,
//   computer: 55,
// };

// let highest=0;
// for (let subject in marks) {
//   if (marks[subject] > highest) {
//     highest = marks[subject];
//   }
// }
// console.log(highest);

// let highest = Math.max(...Object.values(marks));
// console.log(highest);

//-------------------------------------------------------
// let marks = {
//   math: 80,
//   science: 75,
//   english: 90,
//   computer: 55,
// };

// let count = 0;
// for (let key in marks) {
//   count++;
// }
// console.log(count);// 4

// const marks = {
//   Math: 85,
//   Science: 40,
//   English: 78,
//   History: 45,
// };
// let result = {};
// for (let key in marks) {
//   if (marks[key] > 50) {
//     result[key] = marks[key];
//   }
// }
// console.log(result);
//------------------------------------------------------------------
// let obj1 = {
//   name: "ram",
//   age: 23,
// };

// let obj2 = {
//   city: "Pune",
//   course: "Dsa",
// };

// let result = { ...obj1, ...obj2 };
// console.log(result);
//-----------------------------------------------------

// let obj = {
//   name: "Rahul",
//   age: 25,
//   city: "Pune",
// };
// let result = [];

// for (let key in obj) {
//   result.push([key, obj[key]]);
// }
// console.log(result);

// let result = Object.entries(obj);
// console.log(result);
//-----------------------------------------------------------

// find the total and avrage
let arr = [
  { name: "Rahul", age: 25 },
  { name: "Amit", age: 30 },
  { name: "Priya", age: 28 },
];
let total = 0;
for (let i = 0; i < arr.length; i++) {
  total += arr[i].age;
}
console.log(total);
let avrage = total / arr.length;
console.log(avrage);

//-----------------------------------------------------
// total marks of subject :
// let marks = {
//   math: 80,
//   science: 75,
//   english: 90,
//   computer: 55,
// };
// let sum = 0;

// for (let key in marks) {
//   sum += marks[key];
// }
// console.log(sum);

// Find the Highest marks :
let marks = {
  math: 80,
  science: 75,
  english: 90,
  computer: 55,
};

let highest = 0;

for (let key in marks) {
  if (marks[key] > highest) {
    highest = marks[key];
  }
}
console.log("Highest marks:", highest);

//------------------------------------------------------------------------
// greater age in arr given
let arr1 = [
  { name: "Rahul", age: 25 },
  { name: "Amit", age: 30 },
  { name: "Priya", age: 58 },
];

let high = 0;

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i].age > high) {
    high = arr1[i].age;
  }
}
console.log(high);
//-------------------------------------------------------------------------------
// sort the arr in assending and dessending order :
let student = [
  { name: "Rahul", age: 75 },
  { name: "Amit", age: 30 },
  { name: "Priya", age: 18 },
  { name: "Priya", age: 38 },
];

// Assending Order
let assending = student.sort((a, b) => a.age - b.age);
console.log(assending);

// dessending Order
let Dessending = student.sort((a, b) => b.age - a.age);
console.log(Dessending);

//------------------------------------------------------------------
// Check Prime number :
let num = 17;
let isPrime = true;
if (num <= 1) {
  isPrime = fales;
} else {
  for (let i = 2; i < num; i++) {
    if (num % 2 === 0) {
      isPrime = false;
      break;
    }
  }
}
console.log(isPrime);

// Print Prime Till N Number:

for (let num = 2; num <= 40; num++) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(num);
  }
}

//--------------------------------------------------------------
