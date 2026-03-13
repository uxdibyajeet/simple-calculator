// creating the Input logic

// Code for keyboard UI
const calcKeyboard = document.querySelector('.calcKeyboard');

// populating the keyboard
const allButtons = ['ac','del', '%', '/',
                    7, 8, 9, '*', 
                    4, 5, 6, '+', 
                    1, 2, 3, '-', 
                    0, '.', '=',
            ];
const operators = ['+', '-', '/', '*', '%',];
allButtons.forEach((item) => {
    const newButton = document.createElement('button')
    newButton.textContent = item;

    // custom styling
        newButton.style.gridColumn = (item === '=') ? 'span 2' : '';

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
let numA = 0;
let numb = 0;
let userOperator = ''; //maths and other operation inputs
let rawInput = ``; //raw key strokes from user input
    
    //handle I/O logic
    function handleKeyPress(value) {
        
        if (value === 'ac') {
            rawInput = '';
            userOperator = '';
            numA = 0;
            numb = 0;
            displayText.textContent = '0';
        } else if (value === 'del') {
            if (rawInput.length <= 1) {
                rawInput = '';
                displayText.textContent = '0';
            } else {
                rawInput = rawInput.slice(0, -1);
                displayText.textContent = rawInput;
            }
        } else if (operators.includes(value)) {
            //need to only support single operation
            if (userOperator.length === 0) {
                rawInput += ' ' + value + ' ';
                userOperator = value;
                // numA = rawInput.slice(0, -1);
                displayText.textContent = rawInput;
            } else {
                userOperator = value;
            }
            
        } else if (value === '.') {
            let inputSegment = rawInput.split(' ');
            if (!inputSegment.at(0).includes(value)) {
                rawInput += value;
                displayText.textContent = rawInput;
            } else if (!inputSegment.at(2).includes(value)){
                rawInput += value;
                displayText.textContent = rawInput;
            }
        } 
        else {
            rawInput += value;
            displayText.textContent = rawInput;
            console.log(rawInput);
        }
    };

// Handle Evaluation logic
