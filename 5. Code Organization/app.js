// *********************************************************************************************
// *********************************** UNNECESSARY INQUIRIES ***********************************


//window.onload = function () {
var btnHello = document.getElementById("btnHello");

btnHello.addEventListener("click", function () {
    console.log("\n\n*********************************** UNNECESSARY INQUIRIES ***********************************");
    console.log("Hello World");
});
//}

// ********************************************************************************************
// ************************************ FILES ORGANIZATION ************************************

// You should organize your code in different files and folders. It helps to understand better your code

// *********************************************************************************************
// ***************************************** DUPLICITY *****************************************
console.log("\n\n***************************************** DUPLICITY *****************************************");

// This is not the correct way
var account = 2 + 3;
var newAccount = 20 + 45;
var total = account + newAccount;

console.log(total);

// This should be the correct way
function addition(dataA, dataB) {
    return dataA + dataB;
}

var finalAccount = addition(addition(2, 3), addition(20, 45));
console.log(finalAccount);

// *********************************************************************************************
// **************************************** EVENTS HTML ****************************************

var btnHelloWorld = document.getElementById("btnHelloWorld");

btnHelloWorld.addEventListener("click", function () {
    console.log("\n\n**************************************** EVENTS HTML ****************************************");
    console.log("¡Hello World!");
});

// *********************************************************************************************
// ************************************** EXPLICIT BLOCKS **************************************

var state = true;

if (state) {
    console.log("start");
}
var result = 2 + 2;

// This way is the same
if (state)
    console.log("start");
var result = 2 + 2;

// And this way is also the same
if (state) console.log("start"); var result = 2 + 2;

// And this way is also the same but I consider the right one
if (state) console.log("start"); 
var result = 2 + 2;