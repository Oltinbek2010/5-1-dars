// Destructuring assignment ga oid vazifa
// 1. Array Destructuring:

// 1-masala

// const info = ["Ali", 30, "Toshkent"];
// const [name, age, city] = info;
// console.log(name, age, city);

// 2-masala 

// const colors = ["red", "green", "blue", "yellow", "purple"];
// const [r, g, ...newColors] = colors;
// console.log(r, g, newColors);

// 3-masala

// function firstAndLast(arr) {
//     const [first,,, last] = arr;
//     const result = [first, last];
//     return result;
// }

// const result = firstAndLast([10, 20, 30, 40]);
// console.log(result); // [10, 40]

// 4-masala

// const numbers = [1, 2, 3, 4, 5, 6];
// const [, two, , , five] = numbers;
// console.log(two, five);

// 2. Object Destructuring:

// 1-masala

// const book = {
//     title: "JavaScript for Beginners",
//     author: "John Doe",
//     year: 2021
// };
// const {title, author} = book;
// console.log(title, author);

// 2-masala

// const location = {
//     city: "Toshkent",
//     coordinates: {
//       latitude: 41.2995,
//       longitude: 69.2401
//   }
// };
// const { coordinates: { latitude, longitude } } = location;

// console.log(latitude); // 41.2995
// console.log(longitude); // 69.2401

// 3-masala

// const person = {
//   firstName: "Ali",
//   lastName: "Valiyev",
//   age: 28
// };
// const {firstName: fName, lastName: lName} = person;
// console.log(fName, lName);

// 4-masala

// const settings = {
//   theme: "dark",
//   language: "uz"
// };
// const {mode = 'dark', fontSize = 56} = settings;
// console.log(mode, fontSize);

// 3. Qo'shimcha Mashqlar:

// 1-masala

// function configure(options) {
//   const { host = "localhost", port = 8080, protocol = "http" } = options;
//   console.log(`Connecting to ${protocol}://${host}:${port}`);
// }
  
// configure({ host: "127.0.0.1" }); // Connecting to http://127.0.0.1:8080
  
// 2-masala

// function combineAndExtract(arr1, arr2) {
//   const combined = [...arr1, ...arr2]; // Massivlarni birlashtirish
//   const [first, second, third] = combined; // Destrukturatsiya orqali qiymatlarni olish
//   return { first, second, third }; // Obyektni qaytarish
// }
  
// const result = combineAndExtract([1, 2], [3, 4, 5]);
// console.log(result); // { first: 1, second: 2, third: 3 }
  
// Umumiy masalalar:

// 1-masala

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // 1.
//     function regular(array) {
//     let sum = 0;
//     array.forEach(element => {
//         if (element % 2 == 1) {
//             sum += element;
//         }
//     });
//     return sum;
// }
// // 2.
//     const express = function (array) {
//         let sum = 0;
//     array.forEach(element => {
//         if (element % 2 == 1) {
//             sum += element;
//         }
//     });
//     return sum;
//     }
// // 3.
//     const arrow = array => {
//         let sum = 0;
//     array.forEach(element => {
//         if (element % 2 == 1) {
//             sum += element;
//         }
//     });
//     return sum;
//     } 
//     console.log(regular(numbers));
//     console.log(express(numbers));
//     console.log(arrow(numbers));

// 2-masala

// const numbers = [12, 32, 8, 5, 32, 1, 6, 4, 2, 3];

// // 1.
// function regular(arr) {
//     if (arr.length > 0) {
//         let min = arr[0];
//     for (const element of arr) {
//         if (min > element) {
//             min = element;
//         }
//     }
//     return min
//     } 
// }
// // 2.
// const express = function (arr) {
//     if (arr.length > 0) {
//         let min = arr[0];
//     for (const element of arr) {
//         if (min > element) {
//             min = element;
//         }
//     }
//     return min;    
//     }
// }
// // 3.
// const arrow = arr => {
//     if (arr.length > 0) {
//         let min = arr[0];
//     for (const element of arr) {
//         if (min > element) {
//             min = element;
//         }
//     }
//     return min;
//     }
// }
// console.log(regular(numbers));
// console.log(express(numbers));
// console.log(arrow(numbers));

// 3-masala
// let str = '1s2a3l4o5m6';
// function regular(str) {
//     return str.replace(/\D/g, '');
// }
// const express = function(str) {
//     return str.match(/\d+/g).join('');
// };
// const arrow = str => str.match(/\d+/g).join('');
// console.log(regular(str));
// console.log(express(str));
// console.log(arrow(str));

// 4-masala
// let num = 4;
// function regular(num) {
//     return num * num;
// }
// const express = function(num) {
//     return num * num;
// };
// const arrow = num => num * num;
// console.log(regular(num));
// console.log(express(num));
// console.log(arrow(num));

// 5-masala
// let str = 'salom dunyo';
// function regular(str) {
//     return str.split(' ').reverse().join(' ');
// }
// const express = function(str) {
//     return str.split('').reverse().join('');
// };
// const arrow = str => str.split('').reverse().join('');
// console.log(regular(str));
// console.log(express(str));
// console.log(arrow(str));

// 6-masala
// let str = 's,a,l,o,m, ,d,u,n,y,o!';
// function regular(str) {
//     return str.replace(/[^a-zA-Z]/g, '').length;
// }
// const express = function(str) {
//     return str.match(/[a-zA-Z]/g).length;
// };
// const arrow = str => str.match(/[a-zA-Z]/g).length;
// console.log(regular(str));
// console.log(express(str));
// console.log(arrow(str));

// 7-masala
// let nums = [1, 2, 3, 4, 5];
// function regular(arr) {
//     return arr.map(num => num ** 3);
// }
// const express = function(arr) {
//     return arr.map(function(num) {
//         return num ** 3;
//     });
// };
// const arrow = arr => arr.map(num => num ** 3);
// console.log(regular(nums));
// console.log(express(nums));
// console.log(arrow(nums));

// 8-masala
// let str = 'salom dunyo';
// function regular(str) {
//     const vowels = str.match(/[aeiou]/gi);
//      return str.replace(/[aeiou]/gi, () => vowels.pop());
// }
// const express = function(str) {
//     const vowels = str.match(/[aeiou]/gi);
//     return str.replace(/[aeiou]/gi, function() {
//         return vowels.pop();
//     });
// };
// const arrow = str => {
//     const vowels = str.match(/[aeiou]/gi);
//     return str.replace(/[aeiou]/gi, () => vowels.pop());
// };
// console.log(regular(str));
// console.log(express(str));
// console.log(arrow(str));

// 9-masala
// let nums = [23, 4, 1, 5, 6, 8, 9]
// function regular(arr) {
//     const sum = arr.reduce((acc, curr) => acc + curr, 0);
//     return sum / arr.length;
// }
// const express = function(arr) {
//     return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
// };
// const arrow = arr => arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
// console.log(regular(nums));
// console.log(express(nums));
// console.log(arrow(nums));

// 10-masala
// let str = 'salom dunyo';
// let word = 'dunyo';
// function regular(str, word) {
//     const regex = new RegExp(`\\b${word}\\b`, 'gi');
//     return str.replace(regex, '').trim().replace(/\s+/g, ' ');
// }
// const express = function(str, word) {
//     const regex = new RegExp(`\\b${word}\\b`, 'gi');
//     return str.replace(regex, '').trim().replace(/\s+/g, ' ');
// };
// const arrow = (str, word) => str.replace(new RegExp(`\\b${word}\\b`, 'gi'), '').trim().replace(/\s+/g, ' ');
// console.log(regular(str, word));
// console.log(express(str, word));
// console.log(arrow(str, word));
