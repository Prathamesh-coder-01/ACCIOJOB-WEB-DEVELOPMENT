// function greet() {
//   console.log("Hello World ");
// }
// greet();

// function addNum(a, b) {
//   console.log("sum of numbers ", a + b);
// }
// addNum(10, 20);
// addNum(20, 30);

// function isElegiable(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
//   console.log(age);
// }

// console.log(isElegiable(19));

// function diff(a, b) {
//   return a - b;
// }
// console.log(diff(1, 2));

// function factNum(num) {
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact = fact * i;
//   }
//   return fact;
// }
// console.log(factNum(5));

// function printEvenNumm(num) {
//   for (let i = 0; i <= num; i++) {
//     if (i % 2 === 0)
//         console.log(i);
//   }
// }
// printEvenNumm(10);

// function even(num) {
//   for (let i = 1; i <= num; i++) {
//     if (num % 2 === 0) {
//       console.log(i);
//     }
//   }
// }
// even(10);


function sumOfPrimes(n) {
    let sum = 0;

    for (let num = 2; num <= n; num++) {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            sum += num;
        }
    }

    return sum;
}

console.log(sumOfPrimes(10));