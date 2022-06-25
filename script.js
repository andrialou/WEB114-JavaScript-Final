// Alexandria Schneider 11-28-21
// JavaScript knowledge: "use strict"
"use strict";

// JavaScript knowledge: window.prompt()
let userName = prompt("What is your name?");
// JavaScript knowledge: use console.log() to follow and debug your code
console.log(userName);
// JavaScript knowledge: use of ||
if (userName == '' || userName == null) {
    document.getElementById("introParagraph").textContent = `Hello World! Welcome to my game. This webpage was created by Alex Schneider for the WEB 114 final project. Enjoy!`
} else {
    document.getElementById("introParagraph").textContent = `Hello ${userName}! Welcome to my game. This webpage was created by Alex Schneider for the WEB 114 final project. Enjoy!`
}

// JavaScript knowledge: window.alert()
alert("Welcome to the game!");

// Participation points
let i = 0;
function participation() {
    // JavaScript knowledge: use of ++
    i = ++i;
    document.getElementById("participation").textContent = `Participation Points: ${i}`
    console.log(`Counter (points): ${i}`);
}
document.getElementById("button1").addEventListener("click", participation)
document.getElementById("button2").addEventListener("click", participation)
document.getElementById("button3").addEventListener("click", participation)
document.getElementById("button4").addEventListener("click", participation)
document.getElementById("button5").addEventListener("click", participation)
document.getElementById("button6").addEventListener("click", participation)
document.getElementById("button7").addEventListener("click", participation)

// 1. Multiple Choice
// JavaScript knowledge: create several custom functions to process your game (others elsewhere)
function question1() {
    console.log(document.getElementById("option1").checked);
    // JavaScript knowledge: if ... else
    if (document.getElementById("option1").checked) {
        document.getElementById("answer1").textContent = "Correct! The script element is used.";
    } else {
        document.getElementById("answer1").textContent = "Try again!";
    }
}
// JavaScript knowledge: addEventListener(), use individual JavaScript event properties such as .onclick and assign a function to that property
document.getElementById("button1").addEventListener("click", question1, false);

// 2. How JavaScript expressions evaluate user data using +, -, *, /, %, and **
function calculateAnswer() {
    // JavaScript knowledge: let and const
    const number1 = Number(document.getElementById("number1").value);
    const number2 = Number(document.getElementById("number2").value);
    const operator = document.getElementById("operation").value;
    let result = 0;
    // JavaScript knowledge: switch
    switch (operator) {
        // JavaScript knowledge: uses + as addition
        case "add": result = number1 + number2; 
            break;
        case "subtract": result = number1 - number2;
            break;
        case "multiply": result = number1 * number2;
            break;
        case "divide": result = number1 / number2;
            result = result.toFixed(5);
            // JavaScript knowledge: be sure to handle the issue of dividing by 0
            // JavaScript knowledge: use of &&
            if (number1 == 0 && number2 == 0) {
                result = `Error. In JavaScript, 0 divided by 0 results in ${0/0} (Not a Number).`
            } else if (number2 == 0) {
                result = `Error. In JavaScript, any number divided by 0 results in ${1/0}.`;
            }
            break;
        case "modulus": result = number1 % number2;
            break;
        case "power": result = Math.pow(number1, number2);
            break;
    }
    console.log(result);
    document.getElementById("answer2").textContent = `The result of this operation is: ${result}`;
}
document.getElementById('button2').onclick = calculateAnswer;

// 3. How JavaScript expressions evaluate user data using <, >, <=, >=
function calculateBoolean() {
    const number3 = Number(document.getElementById("number3").value);
    const number4 = Number(document.getElementById("number4").value);
    const comparison = document.getElementById("comparison").value;
    let compare = 0;
    switch (comparison) {
        case "lessThan": compare = number3 < number4; 
            break;
        case "greaterThan": compare = number3 > number4;
            break;
        case "lessEquals": compare = number3 <= number4;
            break;
        case "greaterEquals": compare = number3 >= number4;
            break;
    }
    console.log(compare);
    document.getElementById("answer3").textContent = `The result of this operation is: ${compare}`;
}
document.getElementById('button3').onclick = calculateBoolean;

// 4. How JavaScript differentiates between =, ==, and ===
function calculateEquals() {
    const string = document.getElementById("string").value;
    const number = Number(document.getElementById("numberEquals").value);
    const equals = document.getElementById("equals").value;
    let resultOfEqual = "";
    switch (equals) {
        case "equal1":
            resultOfEqual = `The variable "${string}" is assigned to integer ${number}. The result of your input is always true.`; 
            break;
        case "equal2": 
            resultOfEqual = `The value of string "${string}" is compared to the value of integer ${number}. The string is converted to an integer. The result of your input is ${string == number}.`;
            break;
        case "equal3": 
            resultOfEqual = `The value AND type of string "${string}" and integer ${number} are compared. The string remains a string, so the result of your input is ${string === number}.`;
            break;
    }
    console.log(resultOfEqual);
    // JavaScript knowledge: document.getElementById("something1").textContent
    document.getElementById("answer4").textContent = resultOfEqual;
}
document.getElementById('button4').onclick = calculateEquals;

// 5. How JavaScript uses the math Order of Operations (PEMDAS)
function calculatePEMDAS() {
    // JavaScript knowledge: document.getElementById("something2").value
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const num3 = Number(document.getElementById("num3").value);
    const num4 = Number(document.getElementById("num4").value);
    const num5 = Number(document.getElementById("num5").value);
    const num6 = Number(document.getElementById("num6").value);
    const num7 = Number(document.getElementById("num7").value);
    const num8 = Number(document.getElementById("num8").value);
    let resultOfPEMDAS = 0;
    resultOfPEMDAS = num1 + num2 * num3 - num4 / Math.pow(num5,num6) + (num7 + num8)
    console.log(resultOfPEMDAS);
    document.getElementById('answer5').textContent = resultOfPEMDAS;
}
document.getElementById('button5').onclick = calculatePEMDAS;

// 6. Guess what number I'm thinking
function guessNumber() {
    const SECRET_NUMBER = 7;
    let userGuess = document.getElementById("numberGuess").value;
    if (userGuess == SECRET_NUMBER) {
        document.getElementById("answer6").textContent = `Correct! The number I'm thinking of is ${SECRET_NUMBER}!`;
    } else {
        let randomMessage = Math.floor(Math.random() * 3)
        // JavaScript knowledge: array
        let messageArray = ["Nope, try again!", "Incorrect, try again!", "That's not the number, try again!"]
        switch (true){
            case (randomMessage == 0):
                console.log(messageArray[0]);
                document.getElementById("answer6").textContent = messageArray[0];
                break;
            case (randomMessage == 1):
                console.log(messageArray[1]);
                document.getElementById("answer6").textContent = messageArray[1];
                break;
            case (randomMessage == 2):
                console.log(messageArray[2]);
                document.getElementById("answer6").textContent = messageArray[2];
                break;
        }
    }
}
document.getElementById("button6").onclick = guessNumber;

// 7. Animal concatenation
function concatenateAnimals() {
    let animal1 = document.getElementById("animal1").value;
    let animal2 = document.getElementById("animal2").value;
    // JavaScript knowledge: uses + as concatentation
    let animalsConcatenated = animal1[0].toUpperCase() + animal1.slice(1) + animal2[0].toUpperCase() + animal2.slice(1);
    console.log(animalsConcatenated);
    document.getElementById("answer7").textContent = `${animalsConcatenated} airing Tuesdays 8/7c on Nickelodeon.`;
    // JavaScript knowledge: use JavaScript to modify images
    document.getElementById("image").src = "nickelodeon.png";
    document.getElementById("image").alt = "Nickelodeon logo"
}
document.getElementById("button7").onclick = concatenateAnimals;