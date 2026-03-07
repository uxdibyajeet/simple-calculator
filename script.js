// creating the Input logic

// Code for keyboard UI
const calcKeyboard = document.querySelector('.calcKeyboard');

// populating the keyboard
const inputItems = ['ac','del', '%', '/',
                7, 8, 9, '*', 
                4, 5, 6, '+', 
                1, 2, 3, '-', 
                0, '.', '=',
            ];
const operators = ['+', '-', '.', '/', '*', '=', 'del', 'ac', '%'];
inputItems.forEach((item) => {
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
        newButton.style.textTransform = 'uppercase'
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

// Handle key press of user and realtime display of inputs
let input = '';
let userOperator = '';
function handleKeyPress(value) {
    if (value === 'ac') {
        input = '';
        displayText.textContent = 0;
    } else if (value === 'del'){
        if (input.length >= 2){
            input = input.slice(0, -1);
            displayText.textContent = input;
            // console.log(input, input.length);
        } else {
            input = '';
            displayText.textContent = 0;
            // console.log(input, input.length);
        }
    } else if (operators.includes(value)){
        if (value === '=') {
            console.log("answer")
        } else if (value === '.'){
            //if input number has '.' users cannot enter more '.'
            if (!input.includes('.')){
                userOperator = value;
                input += userOperator;
                console.log(input, typeof(input), userOperator);
                displayText.textContent = input;
            } 
        } 
        else {
            // here I need to slice input into two numbers and store that in array to do math;
            userOperator = value;
            input = input.slice(0, -1);
            input += userOperator;
            console.log(input, typeof(input), userOperator);
            displayText.textContent = input;
        }
    } else {
        input += value;
        console.log(input, typeof(input));
        displayText.textContent = input;
    }
};

// Handle Evaluation logic
