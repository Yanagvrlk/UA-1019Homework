// Завдання 1

const newWindow = window.open("", "", "width = 300, height = 300");
setTimeout(() => {
    newWindow.resizeTo(500, 500);
}, 2000);

setTimeout(() => {
    newWindow.moveTo(200, 200);
}, 4000);

setTimeout(() => {
    newWindow.close();
}, 6000);

// Завдання 2

function changeCSS() {
    const paragraph = document.getElementById("text");
    paragraph.style.color = "orange";
    paragraph.style.fontSize = "20px";
    paragraph.style.fontFamily = "Comic Sans MS";
}

const btn = document.querySelector("button");
btn.addEventListener("click", changeCSS);

// Завдання 3

const button1 = document.getElementById("button1");
button1.addEventListener("click", function () {
    document.body.style.backgroundColor = "blue";
});

const button2 = document.getElementById("button2");
button2.addEventListener("dblclick", function () {
    document.body.style.backgroundColor = "pink";
});

const button3 = document.getElementById("button3");
button3.addEventListener("mousedown", function () {
    document.body.style.backgroundColor = "brown";
});
button3.addEventListener("mouseup", function () {
    document.body.style.backgroundColor = "white";
});

const link = document.getElementById("link");
link.addEventListener("mouseover", function () {
    document.body.style.backgroundColor = "yellow";
});
link.addEventListener("mouseout", function () {
    document.body.style.backgroundColor = "white";
});

// Завдання 4

function deleteSelectedElement() {
    const selectElement = document.getElementById("mySelect");
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    selectElement.removeChild(selectedOption);
}


// Завдання 5

const button = document.getElementById("myButton");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "I was pressed!";
});

button.addEventListener("mouseover", function () {
    message.textContent = "Mouse on me!";
});

button.addEventListener("mouseout", function () {
    message.textContent = "Mouse is not on me!";
});