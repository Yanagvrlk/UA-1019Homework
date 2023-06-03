// Завдання 1

class Circle {
    constructor(centerX, centerY, radius) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
    }

    get lengthCircle() {
        return 2 * Math.PI * this.radius;
    }

    static getLengthCircleByRadius(radius) {
        return 2 * Math.PI * radius;
    }

    get copy() {
        return new Circle(this.centerX, this.centerY, this.radius);
    }

    static createCircle(centerX, centerY, radius) {
        return new Circle(centerX, centerY, radius);
    }

    checkPointInside(x, y) {
        const distance = Math.sqrt((x - this.centerX)** 2 + (y - this.centerY)** 2);
        return distance <= this.radius;
    }

    toString() {
        return `Circle with center (${this.centerX}, ${this.centerY}) and radius ${this.radius}`;
      }
}

// Завдання 2
function propsCount (object) {
    return Object.keys(object).length;
}

// Завдання 3

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return `${this.surname} ${this.name}`;
    }
}

class Student extends Person {
    constructor (name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    getFullName(middleName) {
        return `${this.surname} ${this.name} ${middleName}`;
    }

    getCourse() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year + 1;
    }
}

// Завдання 4

class Marker {
    constructor(color) {
      this.color = color;
      this.ink = 100;
    }
  
    print(text) {
      for (let i = 0; i < text.length; i++) {
        if (this.ink >= 20 || text[i] === ' ') {
          console.log(text[i]);
          if (text[i] !== ' ') {
            this.ink -= 20;
          }
        } else {
          console.log('Out of ink!');
          break;
        }
      }
    }
  }
  
  class RefillableMarker extends Marker {
    refill() {
      this.ink = 100;
    }
  }
  
// Завдання 5


class Worker {
    #fullName;
    #dayRate;
    #workingDays;
    #experience;
  
    constructor(fullName, dayRate, workingDays, experience) {
      this.#fullName = fullName;
      this.#dayRate = dayRate;
      this.#workingDays = workingDays;
      this.#experience = experience;
    }
  
    get fullName() {
      return this.#fullName;
    }
  
    set fullName(value) {
      this.#fullName = value;
    }
  
    get dayRate() {
      return this.#dayRate;
    }
  
    set dayRate(value) {
      this.#dayRate = value;
    }
  
    get experience() {
      return this.#experience;
    }
  
    set experience(value) {
      this.#experience = value;
    }
  
    get workingDays() {
      return this.#workingDays;
    }
  
    addWorkingDays(n) {
      this.#workingDays += n;
    }
  
    getSalary() {
      return this.#dayRate * this.#workingDays;
    }
  
    getSalaryWithExperience() {
      return this.#dayRate * this.#workingDays * this.#experience;
    }
  
    static sortBySalary(workers) {
      return workers.slice().sort((a, b) => a.getSalary() - b.getSalary());
    }
  }
  
