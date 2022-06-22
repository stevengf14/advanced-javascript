// *******************************************************************************************
// **************************************** VARIABLES ****************************************
console.log("\n\n**************************************** VARIABLES ****************************************");

var message = "¡Hello World!",
    state = "active",
    result = 45;

// ********************************************************************************************
// ************************************* GLOBAL VARIABLES *************************************
console.log("\n\n************************************* GLOBAL VARIABLES *************************************");

// var globalMessage = "Local message";
result += 2;

var data = {};
data.message = "\n\nLocal message of the object";
data.result = 120;

function hello() {
    console.log(globalMessage);
    console.log(result);

    console.log(data.message);
    console.log(data.result);
}

hello();

// ********************************************************************************************
// ************************************** RESERVED WORDS **************************************
console.log("\n\n************************************** RESERVED WORDS **************************************");

/*
// catch is a reserver word of javascript
function catch(ball){
    console.log(ball);
}

catch("baseball");*/

function catch_ball(ball) {
    console.log(ball);
}

catch_ball("baseball");

// ********************************************************************************************
// ********************************* UNNECESSARY CALCULATIONS *********************************
console.log("\n\n********************************* UNNECESSARY CALCULATIONS *********************************");

var animals = ["dog", "cat", "fish"];

var totalAnimals = animals.length;

// if we keep animals.length, the code will calculate in every iteration
// for (var i = 0; i < animals.length; i++){
for (var i = 0; i < totalAnimals; i++) {
    console.log(animals[i]);
}

// *******************************************************************************************
// *********************************** ANONYMOUS FUNCTIONS ***********************************

var store = {
    name: "The best store",
    calculate: function (price1, price2) {
        return price1 + price2;
    },
    hello: function () {
        var message = "Hello";
        return message;
    }
};

console.log(store.name);
console.log(store.calculate(10, 20));
console.log(store.hello());

var btnHello = document.getElementById("btnHello");

btnHello.addEventListener("click", function () {
    console.log("\n\n*********************************** ANONYMOUS FUNCTIONS ***********************************");
    console.log(store.hello());
});

// ********************************************************************************************
// ****************************************** FOR IN ******************************************
console.log("\n\n****************************************** FOR IN ******************************************");

var person = {
    name: "Steven",
    email: "steven@email.com",
    twitter: "steven",
    hello: function () {
        return "Hello world";
    }
};

var data = "";

for (data in person) {
    console.log(data, person[data]);
}

// ********************************************************************************************
// ************************************* VALIDATE OBJECTS *************************************
console.log("\n\n*************************************");

person = {};
console.log(person);

if (person) {
    console.log("Person exist");
}

// *********************************************************************************************
// ************************************ BOOLEAN EXPRESSIONS ************************************
console.log("\n\n************************************ BOOLEAN EXPRESSIONS ************************************");

var state = true,
    result = "";

if (state) {
    console.log("continue");
} else {
    console.log("stop");
}

// ********************************************************************************************
// ************************************* TERNARY OPERATOR *************************************
console.log("\n\n************************************* TERNARY OPERATOR *************************************");

var action = state ? "continue" : "stop";
console.log(action);

// *******************************************************************************************
// ****************************************** EQUAL ******************************************
console.log("\n\n****************************************** EQUAL ******************************************");

console.log(1 === '1');
console.log(1 == '1');

// *********************************************************************************************
// ********************************** CONSTRUCTORS IN OBJECTS **********************************
console.log("\n\n********************************** CONSTRUCTORS IN OBJECTS **********************************");

function Person(name, lastName) {
    this.name = name;
    this.lastName = lastName;
}

var person = new Person("Steven", "Guaman");
console.log(person);
console.log(person.name);
console.log(person.lastName);

// *********************************************************************************************
// ***************************************** TRY CATCH *****************************************
// console.log("\n\n***************************************** TRY CATCH *****************************************");

var animals = ["dog", "cat", "fish"];

var totalAnimals = animals.length;

/*
// This is not the correct way

for (var i = 0; i < totalAnimals; i++) {
    try {
        // Actions to realize
    } catch (e) {
        // Errors management
    }
}*/

// This is the correct way
try {
    // Actions to realize
    for (var i = 0; i < totalAnimals; i++) {

    }
} catch (e) {
    // Errors management
}

// ********************************************************************************************
// ***************************************** LITERALS *****************************************
console.log("\n\n***************************************** LITERALS *****************************************");

var person = {}; // for a few properties - simple
person.name = "Steven";

var otherPerson = new Object(); // for many propertires - complex

var list = new Array(); // for many elements - complex
list[0] = "apple";
list[1] = "orange";

var newList = ["apple", "orange"]; // for a few elements - simple