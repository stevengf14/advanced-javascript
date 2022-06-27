// ********************************************************************************************
// ******************************************* JSON *******************************************
console.log("\n\n******************************************* JSON *******************************************");

/*var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Santo%20Domingo%2C%20DO%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
$.getJSON(url, function (productos) {
    console.log(productos);
    products.map(product => {
        console.log(product);
    })
});*/

// ********************************************************************************************
// ************************************** JOIN VS CONCAT **************************************
console.log("\n\n************************************** JOIN VS CONCAT **************************************");

var animals = ["dog", "cat", "fish"];
var animalsList = animals.join(", ");
var newList = animals.concat(",");

console.log(typeof animalsList, animalsList);
console.log(typeof newList, newList);

// *********************************************************************************************
// **************************************** PERFORMANCE ****************************************
console.log("\n\n**************************************** PERFORMANCE ****************************************");

console.time("For");

var animals = ["dog", "cat", "fish"];
var animalsLength = animals.length;

for (let i = 0; i < animalsLength; i++) {
    console.log(animals[i]);
}

console.timeEnd("For");
console.time("Map");

var animals = ["dog", "cat", "fish"];
var animalsLength = animals.length;

animals.map(animal => {
    console.log(animal);
});

console.timeEnd("Map");

// *********************************************************************************************
// **************************************** MINIFY CODE ****************************************
console.log("\n\n**************************************** MINIFY CODE ****************************************");

// You can use different tools

// original code
var animals = ["dog", "cat", "fish"];
var animalsLength = animals.length;

animals.map(animal => {
    console.log(animal);
});

// jscompress.com
// minify code -> saving 0.03kb
var animals=["dog","cat","fish"],animalsLength=animals.length;animals.map(a=>{console.log(a)});

// javascriptobfuscator.com/Javascript-Obfuscator.aspx
// obfuscated code -> 
var _0xdcce=["\x64\x6F\x67","\x63\x61\x74","\x66\x69\x73\x68","\x6C\x65\x6E\x67\x74\x68","\x6C\x6F\x67","\x6D\x61\x70"];var animals=[_0xdcce[0],_0xdcce[1],_0xdcce[2]];var animalsLength=animals[_0xdcce[3]];animals[_0xdcce[5]]((_0x2427x3)=>{console[_0xdcce[4]](_0x2427x3)});

// ********************************************************************************************
// ****************************************** JSHINT ******************************************
// console.log("\n\n****************************************** JSHINT ******************************************");

// It help to finf mistakes in your code -> jshint.com

// ********************************************************************************************
// ******************************************* LIBS *******************************************
// console.log("\n\n******************************************* LIBS *******************************************");

// You can work with different libraries, but you have yo pay attention to the support of these libraries.

// *********************************************************************************************
// ****************************************** TESTING ******************************************
// console.log("\n\n****************************************** TESTING ******************************************");

// mochajs.org
// npm install -g mocha