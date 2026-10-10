//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// ARRAYS OF OBJECT

// let libraryes = [
//   {
//     name: "Accio",
//     place: "Baner Pune",
//     books: {
//       book1: {
//         name: "Panchatantra",
//         author: "Vishnu Sharma",
//         publisher: "Penguin Books",
//       },
//       book2: {
//         name: "Malgudi Days",
//         author: "R. K. Narayan",
//         publisher: "Indian Thought Publications",
//       },
//       book3: {
//         name: "The Guide",
//         author: "R. K. Narayan",
//         publisher: "Indian Thought Publications",
//       },
//     },
//   },

//   {
//     name: "Accio",
//     place: "Karol Bagh Delhi",
//     books: {
//       book1: {
//         name: "Godaan",
//         author: "Munshi Premchand",
//         publisher: "Diamond Books",
//       },
//       book2: {
//         name: "Gitanjali",
//         author: "Rabindranath Tagore",
//         publisher: "Macmillan",
//       },
//       book3: {
//         name: "Madhushala",
//         author: "Harivansh Rai Bachchan",
//         publisher: "Rajpal & Sons",
//       },
//     },
//   },
// ];

// print all the Libreries name:

// for (let library of libraryes) {
//   console.log(library.name, " ", library.place);
// }

// let arr = [1, 2, 2, 3, 3, 3, 4, 5];

// let obj = {};
// for (let i = 0; i < arr.length; i++) {
//   if (obj[arr[i]]) {
//     obj[arr[i]]++;
//   } else {
//     obj[arr[i]] = 1;
//   }
// }
// console.log("The frequency of arr is ", obj);

// let arr = [1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 2, 3];

// let obj = {};

// for (let i = 0; i < arr.length; i++) {
//   if (obj[arr[i]]) {
//     obj[arr[i]]++;
//   } else {
//     obj[arr[i]] = 1;
//   }
// }
// console.log(obj);

// let students = [
//   { name: "Abhishek", grade: "A" },
//   { name: "Rakhi", grade: "B" },
//   { name: "Naman", grade: "C" },
//   { name: "Raman", grade: "C" },
// ];

// Approch 1:

// let result = {};
// for (let s of students) {
//   if (!result[s.grade]) {
//     result[s.grade] = [];
//   }

//   result[s.grade].push(s.name);
// }
// console.log(result);

// Approch 2:

// let res = {};
// for (let stu of students) {
//   if (stu.grade in res) {
//     res[stu.grade].push(stu.name);
//   } else {
//     res[stu.grade] = [stu.name];
//   }
// }
// console.log(res);

// object Destrecturing

// let student = {
//   name: "Ram",
//   age: 20,
//   gender: "M",
//   city: "Pune",
// };

// console.log(students);

// let { name, ...obj } = student;
// console.log(name, obj);

// let students = [
//   { name: "Abhishek", grade: "A" },
//   { name: "Rakhi", grade: "B" },
//   { name: "Naman", grade: "C" },
//   { name: "Raman", grade: "C" },
// ];

// let result = {};

// for (let student of students) {
//   if (student.grade in result) {
//     result[student.grade].push[student.name];
//   } else {
//     result[student.grade] = [student.name];
//   }
// }
// console.log(result);

