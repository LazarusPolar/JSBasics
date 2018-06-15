// Prim. Datatypes:
// Number, String, Boolean, Undefined, Null

/*var name = 'Jose';
console.log(name);

var lastName = 'Almaraz';
console.log(lastName);

var age = 24;
console.log(age);

var fullAge = true;
console.log(fullAge);*/

// Lecture: Var 2
/*
var name = "Jose";
var age  = 24;

console.log(name + age);
console.log(age + age);

var job, isMarried;
console.log(job);

job = "Engineer";
isMarried = false;
console.log(job);
console.log(isMarried);

console.log(name + ' is ' + age + ' years old ' + job + ' Is he married? ' + isMarried);

age = 'Thirty Six'
job = 'Teacher'

console.log(name + ' is ' + age + ' years old ' + job + ' Is he married? ' + isMarried);

// To call for an input on JS
var lastName = prompt('Whats your last name');
console.log(lastName);

alert(name + ' is ' + age + ' years old ' + job + ' Is he married? ' + isMarried);*/

// Lecture: Operators
/*var now = 2018;
var birthYear = now - 24;
birthYear = now - 26 * 2;

console.log(birthYear);

var ageJohn = 20; 
var ageMark = 30;

ageJohn = ageMark = 3 + 5 * 4 - 6;

ageMark *= 2;
ageJohn++;

console.log(ageJohn);
console.log(ageMark);*/

// Lecture if/else statements

/*var name = "John";
var age = 23;
var isMarried = 'yes'; 

if(isMarried === 'yes') {
    console.log(name + ' is married');
} else {
    console.log(name + ' will hopefully marry soon.');
}

isMarried = false;

if(isMarried){
    console.log(name + ' is married');
} else {
    console.log(name + ' will hopefully marry soon.');
}

if(23 == "23"){
    console.log("Something");
}*/

// Lecture: Boolean Logic and Switch 
/*
var age = 22; 

if(age < 20){
    console.log("John is a teenager");
} else if (age >= 20 && age < 30) {
    console.log("John is a young man");
} else {
    console.log("John is a man");
}

var job = 'Teacher';
job = prompt("What does John do?")

switch (job) {
    case 'Teacher':
        console.log("Teacher case");
        break;
    
    case 'Driver':
        console.log("Driver case");
        break;

    case 'Cop':
        console.log("Cop case");
        break;

    default:
        console.log("Not considered case");
        break;
}
*/
//// CODING CHALLENGE 1 
/*
var johnHeight = 120;
var jakeHeight = 130;
var julianHeight = 140;

var johnAge = 20;
var jakeAge = 30;
var julianAge = 40;

var johnScore = johnHeight + (5 * johnAge);
var jakeScore = jakeHeight + (5 * jakeAge);
var julianScore = julianHeight + (5 * julianAge);

if(johnScore > jakeScore && johnScore > julianScore){
    console.log("John Wins");
} else if (jakeScore > johnScore && jakeScore > julianScore){
    console.log("Jake Wins");
} else if (julianScore > johnScore && julianScore > jakeScore){
    console.log("Julian Wins");
} else {
    console.log("Empate");
}*/


//// Functions
/*
function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log(age);
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);

function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if(retirement >= 0){
        console.log(name + ' retires in ' + retirement + ' years');
    } else {
        console.log(name + ' is already retired');
    }

}

yearsUntilRetirement("John", 1800);
*/


// Lecture: Statements and expressions
/*
function someFun(par){

}

var someFun = function(par) {

}

// Expressions
var x = 3;

// Statements
if (x === 5){
    // do something
}*/

//////////
// Lecture: arrays
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names[0]);
names[1] = "Ben"
console.log(names);

var john = ['John', 'Smith', 1998, 'designer', false];

//Puts element on the end of the array
john.push('Blue');

//Puts element on the beggining of the array
john.unshift('Mr.');

//Removes last element from the array
john.pop();

//Removes the first element of the array
john.shift();

//Returns the position value of the element searched
john.indexOf('Smith');

console.log(john);

if (john.indexOf('teacher') === -1) {
    console.log('John is not a teacher.')
}
*/

/// Lecture : Objects
// JSON
/*
var john = {
    name: "Jose", 
    lastName: "Roberto", 
    yearOfBirth: 1994,
    job: "teacher",
    isMarried: false
}

console.log(john);
console.log(john.name);
console.log(john["job"]);

var xyz = 'job'; 
console.log(john[xyz]);

john.lastName = "Almaraz";
john.job = "Engineer";

console.log(john);

var jane = new Object(); 
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/

// Lecture: Objects and methods

// Method inside object
// v1.0
/*
var john = {
    name: "Jose", 
    lastName: "Roberto", 
    yearOfBirth: 1994,
    job: "teacher",
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'], 
    calculateAge: function() {
        // Using "this" to use the value of the Json
        return 2016 - this.yearOfBirth;
    }
};
*/
/*
var john = {
    name: "Jose", 
    lastName: "Roberto", 
    yearOfBirth: 1994,
    job: "teacher",
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'], 
    calculateAge: function() {
        // Using "this" to use the value of the Json
        //return 2016 - this.yearOfBirth;
        this.age = 2016 - this.yearOfBirth;
    }
};
//console.log(john.calculateAge(1990));
john.calculateAge();
console.log(john);
*/


// Lecture: Loops
/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}

var names = ['Jane', 'John', 'Mary', 'Mark', 'Bob'];

for(var i=0; i < names.length; i++){
    console.log(names[i]);
}

for(var i = names.length - 1; i >= 0; i--){
    console.log(names[i]);
}

var i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}

for (var i=0; i < 6; i++){
    if(i === 3){
        //break;
        continue;
    }
    console.log(i);
}
*/

//CODING CHALLENGE 2
/*
var actualYear = 2018;
var years = [3000, 2000, 2009, 2012];
var resultArray = [];
var yearToLog;

var resultArray = printFullAge(years);
console.log(years);
console.log(resultArray);


function calculateFullAge(actualYear, year){
    return actualYear - year;
}

function printFullAge(years){
    var resultArray = [];
    var emptyArray = [];

    for(var i=0; i < years.length; i++){
        emptyArray[i] = calculateFullAge(actualYear, years[i]);
    }

    for(var i=0; i < years.length; i++){
        if(emptyArray[i] >= 18) {
            console.log("Person " + i + " is full age: " + emptyArray[i])
            resultArray[i] = true;
        } else {
            resultArray[i] = false;
        }
    }    
    return resultArray;
}
*/

// Lecture: Hoisting
// Hoisting refers to declaration before execution
// Availability of code to use even if it's not declared sequentially

// Works - Function declaration 
/*
calculateAge(1989);

function calculateAge(year) {
    console.log(2016-year);
}*/

//Doesn't work - Variable declaration
/*retirement(1990);

var retirement = function(year) {
    console.log(65 - (2016 - year));
}*/

// Variables
/*
console.log(age);
var age = 24; 

function foo() {
    var age = 70;
    console.log(age);
}

foo();
console.log(age);*/


// Lecture: Scoping
// Workspaces for functions. It can be divided from global scope to function 1 scope and function 2 scope, etc...

// GOOD EXAMPLE
/*
var a = "Hello!";
// Can only recover from global scope not from first or second
first();

function first() {
    // Can access local variables and global but can't recover from second() function variables
    var b = "Hi";
    second();
    
    // Can access ALL Variables
    function second(){
        var c = "Hey!";
        console.log(a + b + c);
    }
}

//BAD EXAMPLE 
// Different scopes to access data 
var a = "Hello!";
first();

function first() {
    var b = "Hi";
    second();
    
    function second(){
        var c = "Hey!";
        third();
    }
}

function third() {
    var d = "John";
    // ERROR
    //console.log(c);
    // CAN JUST ACCES A AND D
    console.log(a + " " + d);
}*/

// Lecture: This

//Window Object is the default object
//console.log(this);

calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    //console.log(this);
}

var john = {
    name: "John",
    yearOfBirth: 1990,
    calculateAge: function(yearOfBirth) {
        // Logs the John Object
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        // Points to the Window Object
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: "Mike", 
    yearOfBirth: 1984
};

// Function borrowing
// Copies function from other object creating the parameter dynamically.
mike.calculateAge = john.calculateAge;
mike.calculateAge();