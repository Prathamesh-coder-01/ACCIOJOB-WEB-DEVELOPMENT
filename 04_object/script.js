//

// let obj = {
//   person1: "Abhishek",
//   person2: "Yash",
//   person3: "Manas",
// };

// console.log(obj);
// for (let key in obj) {
//   console.log(key);
// }
// for (let key in obj) {
//   console.log(obj[key]);
// }

// console.log(Object.keys(obj));

// console.log(Object.values(obj));

// let obj = {
//   firetname: "abhishek",
//   firetname: "abhi",
// };
// console.log(obj);

// let arr = [1, 2, 3, 4, 5, 5];

// let target = 5;
// let count = 0;

// for (let i = 0; i < arr.length; i++);
// if (arr[i] == target) {
//   count++;
// }
// console.log(count);

// let arr = [1, 2, 2, 3, 4, 2, 4, 5, 5];

// let obj = {};

// for (let i = 0; i < arr.length; i++) {
//   if (obj[arr[i]]) {
//     obj[arr[i]]++;
//   } else {
//     obj[arr[i]] = 1;
//   }
// }

// console.log(obj);

// inbuild functions

// let obj = {
//   person1: "Abhishek",
//   person2: "Yash",
//   person3: "Manas",
// };

// let newObj = Object.keys(obj);
// console.log(newObj.length);
// console.log(newObj);

// let val = Object.values(obj);
// console.log(val);

// console.log(Object.entries(obj));

let person = {
  name: "Abhishek",
  lastname: "Shinde",
  address: {
    city: "Pune",
    state: "Maharashtea",
    pincode: 431103,
  },
};

console.log(person);
console.log(person.address);
console.log(person.name, "  ", person.address.city);
console.log(person, " ", person.address.city.pincode);
