// Завдання 2

console.log("Gavrilyuk");

// Завдання 3

let day = 'monday';
let weekday = 'tuesday';
console.log(day, weekday);
weekday = day;
console.log(day, weekday);
 
// Завдання 4

const dog = {
    name: "Cherry",
    age: 1,
    isHappy: true,
    badHabits: undefined,
    someMeaning: null
};

console.log(dog);

// Завдання 5

const isAdult = confirm("Чи виповнилося вам 18 ?");

console.log(isAdult);

// Завдання 6

const firstName = "Yana";
const lastName = "Gavrilyuk";
const group = "UA-1019";
const birthYear = 1997;
const isMarried = false;

console.log(birthYear);
console.log(typeof birthYear);

console.log(isMarried);
console.log(typeof isMarried);

console.log(firstName);
console.log(typeof firstName);
console.log(lastName);
console.log(typeof lastName);
console.log(group);
console.log(typeof group);

const nullVariable = null;
const undefinedVariable = undefined;

console.log(nullVariable);
console.log(typeof nullVariable);

console.log(undefinedVariable);
console.log(typeof undefinedVariable);


// Завдання 7

const login = prompt("Введіть ваш логін:");
const email = prompt("Введіть вашу електронну пошту:");
const password = prompt("Введіть ваш пароль:");
const message = `Dear User, your email is ${email}, your password is ${password}.`;
alert(message);


// Завдання 8

const secondsInHour = 60 * 60;
const secondsInDay = secondsInHour * 24;
const secondsInMonthEven = secondsInDay * 30;
const secondsInMonthOdd = secondsInDay * 31;

console.log("Кількість секунд у годині:", secondsInHour);
console.log("Кількість секунд у добі:", secondsInDay);
console.log("Кількість секунд у парних місяцях:", secondsInMonthEven);
console.log("Кількість секунд у непарних місяцях:", secondsInMonthOdd);

