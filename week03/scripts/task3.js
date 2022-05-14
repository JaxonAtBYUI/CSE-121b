/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
// Step 2: In the function, return the sum of the parameters number1 and number2
function add(num1, num2) {
    return num1 + num2;
}


// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
// Step 4: Assign the return value to an HTML form element with an ID of sum
function addNumbers() {
    let num1 = parseInt(document.querySelector("#addend1").value);
    let num2 = parseInt(document.querySelector("#addend2").value);
    document.querySelector("#sum").value = add(num1, num2);
}

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
const button1 = document.getElementById("addNumbers");
button1.addEventListener("click", addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subtract(num1, num2) {
    return num1 - num2;
}

function subtractNumbers() {
    let num1 = parseInt(document.querySelector("#minuend").value);
    let num2 = parseInt(document.querySelector("#subtrahend").value);
    document.querySelector("#difference").value = subtract(num1, num2);
}

const button2 = document.getElementById("subtractNumbers");
button2.addEventListener("click", subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
multiply = (factor1, factor2) => {
    return factor1 * factor2;
}

multiplyNumbers = () => {
    let factor1 = parseInt(document.querySelector("#factor1").value);
    let factor2 = parseInt(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(factor1, factor2);
}

const button3 = document.getElementById("multiplyNumbers");
button3.addEventListener("click", multiplyNumbers);


// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
const button4 = document.getElementById("divideNumbers");
button4.addEventListener("click", () => {
    let dividend = parseFloat(document.querySelector("#dividend").value);
    let divisor = parseFloat(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = dividend / divisor;

})
// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let date = new Date;

// Step 2: Declare a variable to hold the current year
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
let year = date.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector("#year").textContent = year;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const array = [];
for (i = 1; i < 26; i++) {
    array[i-1] = i
}
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector("#array").textContent = array;
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
document.querySelector("#odds").textContent = array.filter((value) => value % 2 == 1)
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
document.querySelector("#evens").textContent = array.filter((value) => value % 2 == 0)
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
document.querySelector("#sumOfArray").textContent = array.reduce((previousValue, newValue) =>  previousValue + newValue)
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
document.querySelector("#multiplied").textContent = array.map((value) => value * 2);
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.querySelector("#sumOfMultiplied").textContent = array.map((value) => value * 2).reduce((previousValue, newValue) =>  previousValue + newValue)