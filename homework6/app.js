// Завдання 1

const list = document.getElementById("list");
const listElements = list.children;
const firstElement = listElements[0].textContent;
const secondElement = listElements[1].textContent;
const thirdElement = listElements[2].textContent;
const fourthElement = listElements[3].textContent;
const lastElement = listElements[4].textContent;

alert(firstElement + ", " + lastElement + ", " + secondElement + ", " + fourthElement + ", " + thirdElement);

// Завдання 2

const header = document.querySelector("h1");
header.style.backgroundColor = "green";

const firstParagraph = document.querySelector("#myDiv p:first-child");
firstParagraph.style.fontWeight = "bold";

const secondParagraph = document.querySelector("#myDiv p:nth-child(2)");
secondParagraph.style.color = "red";

const thirdParagraph = document.querySelector("#myDiv p:nth-child(3)");
thirdParagraph.style.textDecoration = "underline";

const fourthParagraph = document.querySelector("#myDiv p:nth-child(4)");
fourthParagraph.style.fontStyle = "italic";

const listItems = document.querySelectorAll("#myList li");
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.display = "inline";
}

const span = document.querySelector("span");
span.style.visibility = "hidden";


// Завдання 3

const body = document.querySelector("body");
const main = document.createElement("main");
main.setAttribute("class", "mainClass check item");

const div = document.createElement("div");
div.setAttribute("id", "myDiv2");

const paragraph = document.createElement("p");
paragraph.textContent = "First paragraph";

div.appendChild(paragraph);
main.appendChild(div);
body.appendChild(main);


// Завдання 4

const submitBtn = document.querySelector(".btn");
const outBlock = document.querySelector(".out");
const inputs = document.querySelectorAll(".arr");

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const data = {};

    for (let i = 0; i < inputs.length; i++) {
        const fieldName = inputs[i].getAttribute("data-form");
        const fieldValue = inputs[i].value;
        data[fieldName] = fieldValue;
    }

    outBlock.textContent = JSON.stringify(data, null, 2);
});


// Завдання 5

const circles = document.querySelectorAll(".circle");

circles.forEach(function (circle) {
    const animation = circle.getAttribute("data-anim");
    circle.classList.add(animation);
    circle.addEventListener("animationend", function () {
        circle.classList.remove(animation);
    });
});


// Завдання 6

const colorElements = document.querySelectorAll(".color");

colorElements.forEach(colorElement => {
    colorElement.addEventListener("click", () => {
        const selectedColor = colorElement.getAttribute("color");
        const price = colorElement.getAttribute("data-price");
        const priceElement = document.getElementById("outprice");
        priceElement.textContent = price;
        colorElements.forEach(element => {
            element.classList.remove("active");
        });
        colorElement.classList.add("active");
    });
});

const sizes = document.querySelectorAll(".size");
const priceElement = document.getElementById("outprice");
function changePrice(price) {
    priceElement.textContent = price.toFixed(2);
}
sizes.forEach((size) => {
    size.addEventListener("click", () => {
        const price = parseFloat(size.dataset.price);
        changePrice(price);
        sizes.forEach((size) => {
            size.classList.remove("active");
        });
        size.classList.add("active");
    });
});


function upperCase(str) {
    if (str.match(/^[A-Z]/)) {
      return "String starts with uppercase character";
    } else {
      return "String does not start with uppercase character";
    }
  }

  function upperCase(str) {
    if (str.match(/^[A-Z]/)) {
        return "St"
    }
  }








