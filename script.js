// creating the Input logic

// Code for keyboard UI
const calcKeyboard = document.querySelector('.calcKeyboard');

// code for display UI
const calcDisplay = document.querySelector('.calcDisplay');
const displayText = document.createElement('p');
calcDisplay.appendChild(displayText);

// Global Variables
let rawInput = {
    prevNum: '',
    operator: '',
    currNum: '',
}


// Handle Evaluation logic
function handleEval(a, b, op) {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    const userOp = op;
    const evaluation = {
        '+' : numA + numB,
        '-' : numA - numB,
        '*' : numA * numB,
        '/' : numA / numB,
        '%' : (numA/100) * numB,
    }

    const value = (evaluation[userOp]).toFixed(2);
    let result = (Number.isInteger(evaluation[userOp])) ? parseInt(value) : value;
    return String(result);
    //To-Dos
    // basic calculations (done)
    // handle rounding of floats to 2 digit(done)
}

// populating the keyboard
const allButtons = ['ac','del', '%', '/',
                    7, 8, 9, '*', 
                    4, 5, 6, '+', 
                    1, 2, 3, '-', 
                    0, '.', '=',
            ];

function fetchUserInput() {
    allButtons.forEach((item) => {
        const newButton = document.createElement('button')
        newButton.textContent = item;

        // custom styling
            newButton.style.gridColumn = (item === '=') ? 'span 2' : '';

        // Event Listner
        newButton.addEventListener('click', () => {
            handleNumber(item);
            handleOperators(item);
            handleDecimal(item);
            handleAllClear(item);
            handleDel(item);
            handleEquals(item);
        });

        calcKeyboard.appendChild(newButton);
    });
};

function updateDisplay(value) {
    //default
    let defaultDisplay = 0;
    let display = `${rawInput.prevNum} ${rawInput.operator} ${rawInput.currNum}`;
    if (display === '  ') {
        displayText.textContent = defaultDisplay;
    } else {
        displayText.textContent = (value !== undefined && value !== null) ? display : defaultDisplay;
    }
    // console.log(display, display.length);
}

// Handle key press of user
    
    //handle Input logic numbers
    function handleNumber(value) {
        const valueToStr = value.toString(); 
        const numInputs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
        if(numInputs.some(item => valueToStr.includes(item))){
            // if rawInput.operator doesnt hve value store inputs to prevNum else CurNum (done)
            rawInput[rawInput.operator === '' ? 'prevNum' : 'currNum'] += valueToStr;
            updateDisplay(valueToStr);
        } else {
            return null;
        }
    };
    //handle Input logic Operators
    function handleOperators(value) {
        const valueToStr = value.toString();
        const operators = ['+', '-', '/', '*', '%',];
        if(operators.some(item => valueToStr.includes(item))) {
            if (rawInput.operator === '' || rawInput.currNum === '') {
                // replacing operator if rawInput.operator && rawInput.currNum are empty
                rawInput.operator = valueToStr; 
                updateDisplay(valueToStr);
            } else {
                // solved: Enter another operator or equals sign to generate result
                let result = handleEval(rawInput.prevNum, rawInput.currNum, rawInput.operator);
                rawInput.prevNum = result;
                rawInput.operator = valueToStr;
                rawInput.currNum = '';
                console.log(result);
                updateDisplay(valueToStr); 
            }
        } else {
            return null;
        }
    }
    //handle decimal 
    function handleDecimal(value) {
        const valueToStr = value.toString();
        // if value === '.', (done)
        if (valueToStr === '.') {
            let activeField = rawInput.operator === '' ? 'prevNum' : 'currNum';  // check working number currNum | prevNum, (done)
            let addDecimal = (rawInput[activeField].length === 0 ? '0.' : '.');  // check if empty or has number, add '0.' or '.' (done)
            // check if current already has decimal (to-do)
            if (!rawInput[activeField].includes('.')) {
                rawInput[activeField] += addDecimal;
                updateDisplay(valueToStr);
            }
        } else {
            return null
        }
    }

    // handle All Clear
    function handleAllClear(value) {
        const valueToStr = value.toString();
        if (valueToStr === 'ac') {
            rawInput.operator = '';
            rawInput.prevNum = '';
            rawInput.currNum = '';
            updateDisplay(valueToStr);
        } else {
            return null;
        }
    }

    //handle del
    function handleDel(value) {
        const valueToStr = value.toString();
        if (valueToStr === 'del') {
            let activeField = rawInput.operator === '' ? 'prevNum' : (rawInput.currNum === '' ? 'operator' : 'currNum');  // check working field
            let removed = rawInput[activeField].slice(0, -1);
            rawInput[activeField] = removed;
            updateDisplay(valueToStr);
        } else {
            return null;
        }
    }

    //handle '='
    function handleEquals(value) {
        const valueToStr = value.toString();
        if (valueToStr === '=') {
            //To-Do:
            // handle divide by zero
            //case 1: prevNum is empty
            //case 2: currNum is empty
            //case 3: When a result is displayed, 
            // ..pressing a new digit should clear 
            // ..the result and start a new calculation 
            // ..instead of appending the digit to the 
            // ..existing result
            let result = handleEval(rawInput.prevNum, rawInput.currNum, rawInput.operator);
            rawInput.prevNum = result;
            rawInput.operator = '';
            rawInput.currNum = '';
            console.log(result);
            updateDisplay(valueToStr); 
        } else {
            return null;
        }
    }

fetchUserInput();
updateDisplay();