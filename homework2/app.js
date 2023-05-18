// Завдання 1
  
  let a = 1;
  let b = 2;
  let c = 3;
  
  const result = a < b && b < c;
  console.log(result); 

// Завдання 2

let x = 1;
let y = 2;

let res1 = "" + x + y; 
console.log(res1); 
console.log(typeof res1); 

let res2 = "" + true + y;
console.log(res2);
console.log(typeof res2); 

let res3 = x < y;
console.log(res3); 
console.log(typeof res3);

let res4 = parseInt("xy");
console.log(res4); 
console.log(typeof res4);


// Завдання 3

let age = prompt("Вкажіть Ваш вік :");
let isAdult = (age >= 18) ? "Ви досягли повнолітнього віку!" : "Ви ще надто молоді!";

console.log(isAdult);


// Завдання 5

let sideA = parseFloat(prompt("Введіть довжину сторони A:"));
let sideB = parseFloat(prompt("Введіть довжину сторони B:"));
let sideC = parseFloat(prompt("Введіть довжину сторони C:"));

if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {
  console.log("Incorrect data");
} else {
  let semiPerimeter = (sideA + sideB + sideC) / 2;
  let area = Math.sqrt(semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC));

  console.log(area.toFixed(3));
}

let isRightTriangle = (Math.pow(sideA, 2) === Math.pow(sideB, 2) + Math.pow(sideC, 2) ||
                        Math.pow(sideB, 2) === Math.pow(sideA, 2) + Math.pow(sideC, 2) ||
                        Math.pow(sideC, 2) === Math.pow(sideA, 2) + Math.pow(sideB, 2)) ? 
                        "Це прямокутний трикутник" : "Це не прямокутний трикутник";

  console.log(isRightTriangle);


// Завдання 6


