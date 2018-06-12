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