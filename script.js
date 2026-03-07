// creating the Input logic

// Code for keyboard UI
const calcKeyboard = document.querySelector('.calcKeyboard');

// populating the keyboard
const inputNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
inputNums.forEach((item) => {
    const newButton = document.createElement('button')
    newButton.textContent = item;
    calcKeyboard.appendChild(newButton);

    newButton.style.padding = "0.7rem";
    newButton.style.display = "flex";
    newButton.style.aspectRatio = "1/1";
    newButton.style.fontSize = "1rem";
});

// creating the Output logic and UI

// code for display UI
const calcDisplay = document.querySelector('.calcDisplay');
let calcDisplayContent = '';
calcDisplay.textContent = calcDisplayContent;