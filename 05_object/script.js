//  object of object

// let school = {
//   name: "DPS",
//   location: "R.K road Delhi",
//   class: {
//     name: "10th",
//     student: 40,
//     acg: 50,
//   },
// };

// console.log(school.class.name);
// console.log(school.class["name"]);
// console.log(school["class"]["name"]);

// let key = "name";
// console.log(school.class[key]);

// let school = {
//   name: "DPS",
//   location: "R.K road Delhi",
//   class: [
//     {
//       name: "9th",
//       student: 40,
//       avgStudent: 50,
//       avgMarks: 70,
//     },
//     {
//       name: "10th",
//       student: 50,
//       avgStudent: 60,
//       avgMarks: 80,
//     },
//     {
//       name: "11th",
//       student: 30,
//       avgStudent: 45,
//       avgMarks: 86,
//     },
//   ],
// };

// console.log(school);
// // console.log(school.class);

let library = {
  name: "Accio",
  location: "Baner Road Pune",

  books: [
    {
      srNo: 1,
      bookName: "JavaScript: The Definitive Guide",
      author: "David Flanagan",
      price: 799,
      category: "Programming",
    },
    {
      srNo: 2,
      bookName: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      price: 599,
      category: "Programming",
    },
    {
      srNo: 3,
      bookName: "You Don't Know JS",
      author: "Kyle Simpson",
      price: 699,
      category: "JavaScript",
    },
    {
      srNo: 4,
      bookName: "Learning React",
      author: "Alex Banks",
      price: 899,
      category: "React",
    },
  ],
};

// console.log(library);
// console.log(library.books);
// console.log(library.books);
// for (let book of library.books) {
//   console.log(book.name, "->", book.author);
// }

// Add the publisher in the object
// for (let book of library.books) {
//   book.publisher = "nana shyam";
// }
// console.log(library);

// find the David Flanagan name author book in tyhe object
// for (let book of library.books) {
//   if (book.author == "David Flanagan") {
//     console.log(book.bookName);
//   }
// }

// find the  legth of the books in the object
// console.log(library.books.length);

// deleat the book of name David Flanagan is present
// for (let book of library.books) {
//   if (book.author == "David Flanagan") {
//     console.log(delete book.bookName);
//   }
// }

// console.log(library);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// ARRAYS OF OBJECT

let libraryes = [
  {
    name: "Accio",
    place: "Baner Pune",
    books: {
      book1: {
        name: "Panchatantra",
        author: "Vishnu Sharma",
        publisher: "Penguin Books"
      },
      book2: {
        name: "Malgudi Days",
        author: "R. K. Narayan",
        publisher: "Indian Thought Publications"
      },
      book3: {
        name: "The Guide",
        author: "R. K. Narayan",
        publisher: "Indian Thought Publications"
      }
    }
  },

  {
    name: "Accio",
    place: "Karol Bagh Delhi",
    books: {
      book1: {
        name: "Godaan",
        author: "Munshi Premchand",
        publisher: "Diamond Books"
      },
      book2: {
        name: "Gitanjali",
        author: "Rabindranath Tagore",
        publisher: "Macmillan"
      },
      book3: {
        name: "Madhushala",
        author: "Harivansh Rai Bachchan",
        publisher: "Rajpal & Sons"
      }
    }
  }
];