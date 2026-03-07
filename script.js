// creating the Input logic

// Code for keyboard UI
const calcKeyboard = document.querySelector('.calcKeyboard');

// populating the keyboard
const inputs = ['del','ac', '%', '/',
                7, 8, 9, '*', 
                4, 5, 6, '+', 
                1, 2, 3, '-', 
                0, '.', '=',
            ];
const operators = ['+', '-', '.', '/', '*', '=', 'del', 'ac', '%'];
inputs.forEach((item) => {
    const newButton = document.createElement('button')
    newButton.textContent = item;

    // custom styling
    if (item === "=") {
        newButton.style.backgroundColor = "hsla(210, 10%, 95%, 1)"
        newButton.style.color = "#080808";
        newButton.style.gridColumn = 'span 2';
        newButton.style.aspectRatio = 'auto';
    } else if (operators.includes(item)) {
        newButton.style.backgroundColor = "hsla(210, 10%, 30%, 1)";
        newButton.style.color = "#fff";
    } else {
        newButton.style.backgroundColor = 'hsla(210, 10%, 20%, 1)';
        newButton.style.color = '#fff';
    }

    // Event Listner
    newButton.addEventListener('click', () => {
        handleKeyPress(item);
    });

    calcKeyboard.appendChild(newButton);
});

// creating the Output logic and UI

// code for display UI
const calcDisplay = document.querySelector('.calcDisplay');
const displayText = document.createElement('p');
calcDisplay.appendChild(displayText);
displayText.textContent = 0;

// Handle key press of user
function handleKeyPress(value) {
    console.log(value, typeof(value));
    let calcDisplayContent = value;
    displayText.textContent = calcDisplayContent;
}