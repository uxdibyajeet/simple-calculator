// creating the Input logic

// Code for keyboard UI
const calcKeyboard = document.querySelector('.calcKeyboard');

// populating the keyboard
const inputs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '-', '.', '/', '*', '=',];
const operators = ['+', '-', '.', '/', '*', '=',];
inputs.forEach((item) => {
    const newButton = document.createElement('button')
    newButton.textContent = item;
    // default styling
    // newButton.style.minHeight = "2.5rem";
    newButton.style.aspectRatio = "1/1";
    newButton.style.fontSize = "calc(0.5rem + 1vw)";
    newButton.style.alignItems = "center";

    // custom styling
    if (item === "=") {
        newButton.style.backgroundColor = "hsla(50, 70%, 70%, 1)"
        newButton.style.color = "#080808";
    } else if (operators.includes(item)) {
        newButton.style.backgroundColor = "hsla(210, 70%, 30%, 1)";
        newButton.style.color = "#fff";
    } else {
        newButton.style.backgroundColor = 'hsla(210, 10%, 15%, 1)';
        newButton.style.color = '#fff';
    }

    calcKeyboard.appendChild(newButton);
});

// creating the Output logic and UI

// code for display UI
const calcDisplay = document.querySelector('.calcDisplay');
let calcDisplayContent = 'text';
calcDisplay.textContent = calcDisplayContent;