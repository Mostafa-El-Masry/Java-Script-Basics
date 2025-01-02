let colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)",
];

const squares = document.querySelectorAll(".square");

for (let i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
}

let a = "red";
let b = "blue";

let c;
c = a;
a = b;
b = c;

// for (let color of colors){
//  alert(color);
//  break;
// }

// function maxiumumNumber (x, y){
// 	return (y > x ) ? alert (y) : alert (x);
// };

// maxiumumNumber (18 , 7000);

// function isLandScape (Width, Height){
// 		return (Width > Height )
// }
// 	console.log(isLandScape (1005 , 1060));

// const output = fizzBuzz("ahmed");
// console.log (output);

// function fizzBuzz (input){
// 	if(input % 3 === 0 && input % 5 !== 0 ) {
// 		return 'fizz'
// 	}else if (input % 3 !== 0 && input % 5 === 0){
// 		return 'Buzz'
// 	}else if (input % 3 === 0 && input % 5 === 0){
// 		return 'fizzBuzz'
// 	}else {
// 		return 'Not a Number'
// 	}
// };

// const outputn = fizzBuzz(5);
// console.log (outputn);

// function fizzBuzz (input){
// 	if (typeof input !== 'number') {
// 		return 'Not a Number'
// 	}else if(input % 3 === 0 && input % 5 === 0 ) {
// 		return 'fizzBuzz'
// 	}else if (input % 5 === 0){
// 		return 'Buzz'
// 	}else if (input % 3 === 0){
// 		return 'fizz'
// 	}
// };

// //12 points you get suspended
// checkSpeed(79);

// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmperh = 5;
//   if (typeof speed !== "number") {
//     alert("Not a Number");
//   } else if (speed <= speedLimit + kmperh) {
//     alert("ok");
//     return;
//   } else if (speed > speedLimit) {
//     const points = Math.floor((speed - speedLimit) / kmperh);
//     if (points < 12) {
//       alert("You got " + points + " ponits for Speeding.");
//     } else {
//       alert("Your liscence got suspended");
//     }
//   }
// }

// showNumber(4);

// function showNumber(limit) {
//   for (let i = 0; i <= limit; i++) {
//     let type;
//     if (i % 2 === 0) {
//       type = "Even";
//     } else {
//       type = "Odd";
//     }
//     alert(i + " " + type);
//   }
// }

// const array = [1, 3, 5, null, 0];

// function countTruthy(array) {
//   let truthyValues = 0;

//   for (let value of array) {
//     if (value) {
//       truthyValues++;
//     }
//   }
//   alert(truthyValues);
// }

// countTruthy(array);

// const movie = {
//   title: "a",
//   relasyeay: 2018,
//   rating: 4.5,
//   director: "b",
// };

// showProperties(movie);

// function showProperties(obj) {
//   for (let key in obj)
//     if (typeof obj[key] === "string") {
//       alert([obj[key]]);
//     }
// }

// sum(10);

// function sum(limit) {
//   let count = 0;

//   for (let i = 1; i <= limit; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       count += i;
//     }
//   }

//   alert(count);
// }

// const marks = [80, 80, 50, 50, 60];

// alert(calculateGrade(marks));

// function calculateGrade(marks) {
//   let total = 0;

//   for (mark of marks) {
//     total += mark;
//     let average = total / marks.length;

//     if (average < 60) return "F";
//     if (average < 70) return "D";
//   }
// }

// showStars(85);

// function showStars(rows) {
//   let stars = "";
//   for (let row = 0; row <= rows; row++) {
//     stars += "*";
//     console.log(stars);
//   }
// }

// showPrimes(20);

// function showPrimes(limit) {
//   for (let number = 2; number <= limit; number++) {
//     let isPrime = true;
//     for (let factor = 2; factor < number; factor++) {
//       if (number % factor === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       alert(number);
//     }
//   }
// }

// Object-Oriented Programming (OOP)

// function Circle(radius) {
//   return {
//     radius,

//     location: {
//       x: 1,
//       y: 1,
//     },

//     isVisable: true,
//     draw() {
//       console.log(Circle);
//     },
//   };
// }

// console.log(Circle(1));

// delete Circle.radius;
// delete Circle.draw;
