// ********************************************************************************************
// ************************************* VARIABLES FORMAT *************************************

// camelCase
var completeName = "Steven Guamán";

// snake_case
var complete_name = "Steven Guamán";

function helloWorld() {

}

// You should only one case in your code

// *******************************************************************************************
// **************************************** CONSTANTS ****************************************

// You should use uppercase to write constants

var LIMIT = "30";

// if you use a complex constant, you should use snake_case
var TOTAL_LIMIT = "30";

// ********************************************************************************************
// ************************************** CODE ALIGNMENT **************************************

// It's important align your code to understand better the logic
function helloWorld() {
    let textVar = {
        a: 10,
        b: 30,
        c: 10,
        d: function () {
            return a * b * c;
        }
    }
    return textVar;
}

// *******************************************************************************************
// **************************************** SEMICOLON ****************************************

// Semicolon specifies when a statement ends.
// In javascript it is not necessary to use the semicolon, but it is a good practice to use it

function helloWorld() {
    let textVar = {
        a: 10,
        b: 30,
        c: 10,
        d: function () {
            return a * b * c;
        }
    }
    return textVar;
}

// *******************************************************************************************
// ************************************** ABBREVIATIONS **************************************

// var arrayAnimals = ["dog", "cat", "fish"];
var arrAnimals = ["dog", "cat", "fish"];

// var buttonHello = document.getElementById("buttonHello");
var btnHello = document.getElementById("btnHello");

// var formPrincipal = document.getElementById("formPrincipal");
var frmPrincipal = document.getElementById("frmPrincipal");

// ********************************************************************************************
// ***************************************** COMMENTS *****************************************

var name = "Steven";
var email = "stevengf@email.com";

/**
 * function to say hello
 * @param {string} name -- name of the person
 */
function hello(name) {
    // it returns the message
    return "hello " + name;
}

/*
    This is a comment block
*/

// *******************************************************************************************
// ************************************* QUOTATION MARKS *************************************

var message = "The activity was 'fun'";
var message2 = 'The activity was "fun"';

// ********************************************************************************************
// ****************************************** JSLINT ******************************************

// Using JSLINT you can validate or verify your code to get clean and readable code
// www.jslint.com