// Завдання 1

function sumSliceArray(arr, first, second) {
    if (typeof first !== 'number' || typeof second !== 'number') {
        throw new Error('Порядкові номери мають бути числами.');
    }

    if (first >= arr.length || second >= arr.length) {
        throw new Error('Порядкові номери виходять за межі допустимого діапазону.');
    }

    return arr[first] + arr[second];
}


// Завдання 2


function checkUser() {
    try {
        const name = prompt('Please enter your name:');
        const age = prompt('Please enter your age:');
        const status = prompt('Please enter your status (admin, moderator, user):');

        if (!name || !age || !status) {
            throw new Error('The field is empty! Please enter your age.');
        }

        const parsedAge = parseInt(age);

        if (isNaN(parsedAge)) {
            throw new TypeError('Invalid age value. Age must be a number.');
        }

        if (parsedAge < 18 || parsedAge > 70) {
            throw new RangeError('Your age is not within the allowed range.');
        }

        if (status !== 'admin' && status !== 'moderator' && status !== 'user') {
            throw new EvalError('Invalid status value. Please enter a valid status.');
        }

        alert('You have access to watch the movie!');
    } catch (error) {
        alert(`Error: ${error.name}\n${error.message}`);
    }
}

checkUser();


// Завдання 3

function calcRectangleAria(width, height) {
    if (typeof width !== "number" || typeof height !== "number") {
        throw new TypeError("Parameters should be number!");
    }
    return width * height;
}

try {
    const width = Number(prompt("Enter the width of the rectangle:"));
    const height = Number(prompt("Enter the height of the rectangle:"));
    const area = calcRectangleAria(width, height);
    console.log("The area of the rectangle is:", area);
} catch (error) {
    console.log("Error:", error.message);
}

// Завдання 4

class MonthException {
    constructor(message) {
        this.name = 'MonthException';
        this.message = message;
    }
}

function showMonthName(month) {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    if (month < 1 || month > 12) {
        throw new MonthException('Incorrect month number');
    }

    return months[month - 1];
}

try {
    console.log(showMonthName(5));
    console.log(showMonthName(14));
} catch (error) {
    if (error instanceof MonthException) {
        console.log(`${error.name} ${error.message}`);
    } else {
        console.log('An error occurred:', error.message);
    }
}

// Завдання 5

function showUser(id) {
    if (id < 0) {
        throw new Error('ID must not be negative');
    }

    return { id };
}

function showUsers(ids) {
    const users = [];

    for (let i = 0; i < ids.length; i++) {
        try {
            const user = showUser(ids[i]);
            users.push(user);
        } catch (error) {
            console.error(error.message);
        }
    }

    return users;
}

const users = showUsers([7, -12, 44, 22]);
console.log(users);

