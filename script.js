// creating the Input logic

// Code for keyboard UI
const calcKeyboard = document.querySelector('.calcKeyboard');


// Handle Evaluation logic
function handleEval(a, b, op) {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    const userOp = op.split(' ').join('');
    const evaluation = {
        '+' : numA + numB,
        '-' : numA - numB,
        '*' : numA * numB,
        '/' : numA / numB,
    }
    return String(evaluation[userOp]);
}

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
                const forDel = rawInput.split(' ').join('');
                rawInput = forDel.slice(0, -1);
                displayText.textContent = rawInput;
            }
        } else if (operators.includes(value)) {
            //need to only support single operation
            if (!operators.some(op => rawInput.includes(op))) {
                rawInput += ' ' + value + ' ';
                displayText.textContent = rawInput;
                console.log(rawInput)
            } else if (operators.some(op => rawInput.includes(op))) {
                rawInput = rawInput.slice(0, -3); // removes last three characters
                rawInput += ' ' + value + ' ';
                displayText.textContent = rawInput;
            }
        } else if (value === '.') {
            let inputSegment = rawInput.split(' '); // splits rawInput into 3 segemnts in array format
            let currNum = inputSegment[inputSegment.length -1]; // current working number
            if (!currNum.includes(value)) {
                const addDecimal = (currNum === '') ? '0.' : '.';
                rawInput += addDecimal;
                displayText.textContent = rawInput;
            }
        } else if (value === '=') {
            let segemnts = rawInput.split(' ');
            rawInput = handleEval(segemnts.at(0), segemnts.at(2), segemnts.at(1));
        } else {
            rawInput += value;
            displayText.textContent = rawInput;
            console.log(rawInput);
        }
    };
