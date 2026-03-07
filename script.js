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
let rawInput = ''; //raw key strokes from user input
let userOperator = ''; //maths and other operation inputs
function handleKeyPress(value) {
    if (value === 'ac') {
        rawInput = '';
        displayText.textContent = 0;
    } else if (value === 'del'){
        if (rawInput.length >= 2){
            rawInput = rawInput.slice(0, -1);
            displayText.textContent = rawInput;
            // console.log(input, input.length);
        } else {
            rawInput = '';
            displayText.textContent = 0;
            // console.log(input, input.length);
        }
    } else if (operators.includes(value)){
        // this else if controls I/O of custom operations, excluding: a> DEL and b> AC
        if (value === '=') {
            console.log("answer")
        } else if (value === '.'){
            //if input number has '.' users cannot enter more '.'
            if (!rawInput.includes('.')){
                userOperator = value;
                rawInput += userOperator;
                console.log(rawInput, typeof(rawInput), userOperator);
                displayText.textContent = rawInput;
            } 
        } 
        else {
            //check if input already has a math operator. Cases: YES, NO, EDGE
            if (!operators.some(item => rawInput.includes(item))) {
                //Case NO: there are no math oparator in the input
                userOperator = value;
                rawInput += userOperator;
                console.log(rawInput, typeof(rawInput), userOperator);
                displayText.textContent = rawInput;
            } else if (operators.some(item => rawInput.includes(item) && rawInput.at(-1).includes(item))) {
                //Case YES: input has math operator and it is the last item.
                //Case EDGE: if user tries to add another math operator.
                userOperator = value;
                rawInput = rawInput.slice(0, -1);
                rawInput += userOperator;
                displayText.textContent = rawInput;
                console.log(rawInput, typeof(rawInput), userOperator);
            }
            // here I need to slice input into two numbers and store that in array to do math;

        }
    } else {
        rawInput += value;
        console.log(rawInput, typeof(rawInput));
        displayText.textContent = rawInput;
    }
};

// Handle Evaluation logic
