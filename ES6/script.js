/////////////////////////
// Lecture: let and const
/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
*/

/*
// ES5
function driversLicense(passedTest) {
    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;

    }

    console.log(firstName + ' born in ' + yearOfBirth + ', is now officially allowed to drive a car');
}

driversLicense(true);

// ES6
function driversLicense6(passedTest) {
    let firstName;
    const yearOfBirth = 1990;

    if (passedTest) {
        firstName = 'John';
    }
    console.log(firstName + ' born in ' + yearOfBirth + ', is now officially allowed to drive a car');
}

driversLicense(true);


var i = 23;

for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);
*/







/////////////////////////
// Lecture: Blocks and IIFEs

// ES6
/*
{
    const a = 1;
    let b = 2;
    var c = 3;
}
console.log(c);
//console.log(a+b);
*/

/////////////////////////
// Lecture: Strings

// Template Literals
/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1998;
function calcAge(year) {
    return 2016 -year;
}

console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. And today he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;

console.log(n.startsWith('J'));
console.log(n.endsWith('h'));
console.log(n.includes(' '));
console.log(`${firstName} `.repeat(5));

*/


/////////////////////////
// Lecture: Arrow Functions
/*
const years = [1998, 2001, 1956, 1930];

//ES5 
var ages5 = years.map(function(el) {
    return 2016 - el;
}); 
console.log(ages5);

//ES6 
//Single argument
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

//More than one argument requires parenthesis
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

//More lines of code, braces and return keyword required
ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
})
console.log(ages6);
*/

/////////////////////////
// Lecture: Arrow Functions: 'this' keyword

//ES5
/*
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {

        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str); 
        });
    }
}
box5.clickMe();
*/

//ES6
/*
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {

        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str); 
        });
    }
}
//box5.clickMe();

function Person(name) {
    this.name = name;
}

//ES5
/*
Person.prototype.myFriends5 = function(friends) {
    
    var arr = friends.map(function(el) {
        return this.name + ' is frinds with ' + el;
    }.bind(this));
    console.log(arr);
}


var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends6(friends);
*/
/*
//ES6
Person.prototype.myFriends6 = function(friends) {
    var arr = friends.map(el => `${this.name}  is frinds with ${el}`);
    console.log(arr);
}


var friends = ['Bob', 'Jane', 'Mark'];
new Person('Mike').myFriends6(friends);



/////////////////////////
// Lecture: Destructuring

//ES5
var john = ['John', 26];
var name = john[0];
var age = john[1];

//ES6
const [name2, age2] = ['John', 26];
console.log(name2, age2);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

//create variables outside the object to call on.
const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);
//Assign new variable name the same way the object is written.
const {firstName: first, lastName: last} = obj;
console.log(first);
console.log(last);



function calcAgeOfRetirement(year) {
    const age = new 
    Date().getFullYear() - year;
    return [age, 65 - age];
}

//const [age2, retirement] = calcAgeOfRetirement(1990);
//console.log(age2);
//console.log(retirement);


/////////////////////////
// Lecture: Arrays

const boxes = document.querySelectorAll('.box');

//ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerBlue'
});


//ES6
//Destructures nodes from querySelector into an array
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//ES5
for(var i = 0; i < boxesArr5.length; i++) {

    if(boxesArr5[i].className === 'box blue') {
        continue;
    } else {

    }
}

/////////////////////////
// Lecture: Rest Parameters

//ES5
/*
function isFullAge5() {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= 18);
    })
}

//ES6
function isFullAge6(...years) {
    years.forEach(cur => (2016 - cur) >= 18);
}

isFullAge5(1990, 1999, 1965);
*/

/*
//ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'American' : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}
*/
//ES6
/*
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
console.log(john);
*/
/*
/////////////////////////
// Lecture: Maps

const question = new Map();
// assign key/value pair
question.set('question', 'What is the official name of the latest major Javascript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct Answer');
question.set(false, "wrong Answer, please try again.");

//console.log(question.get('question'));
//console.log(question.size);

/*
if(question.has(4)) {
    //console.log('Answer 4 is here');
}

// loop through a map
//question.forEach((value, key) => console.log(`This is ${key}, and its set to ${value}`));

for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));
*/

/////////////////////////
// Lecture: Classes
/*
 //ES5
 var Person = function(name, yearOfBirth, job){
     this.name = name;
     this.yearOfBirth = yearOfBirth;
     this.job = job;
 }

 Person.prototype.calculateAge = function() {
     var age = new Date().getFullYear - this.yearOfBirth;
     console.log(age);
 }

 var john5 = new Person('John', 1990, 'teacher');

 //ES6
 class Person6 {
     constructor (name, yearOfBirth, job) {
         this.name = name;
         this.yearOfBirth = yearOfBirth;
         this.job = job;
     }

     calculateAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
     }
 } 

const john6 = new Person6('John', 1990, 'teacher');
*/

/////////////////////////
// Lecture: Classes with Subclasses
/*
//ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
       var age = new Date().getFullYear - this.yearOfBirth;
       console.log(age);
    }
} 

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth,job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

johnAthlete6.wonMedal();
johnAthlete6.calculateAge();
*/


/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/


class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    } 
}

class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }

    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km`);
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear, length, size);
        this.length = length;
        this.size = size;
    }

    classifyStreet () {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, built in ${this.buildYear} is a ${classification.get(this.size)} street.`);
    }
}

const allParks = [new Park('Green Park', 1987, 0.2, 215),
                new Park('National Park', 1894, 2.9, 3541),
                new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
                new Street('Park Avenue', 1961, 3.2, 2),
                new Street('Garrison Avenue', 1990, 0.98, 3),
                new Street('Jackson Drive', 1999, 1.2, 5)];


function calc(arr) {

    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

    return [sum, sum / arr.length];

}

function reportParks(p) {
        
    console.log('------Parks Report------');

    // Density
    p.forEach(el => el.treeDensity());

    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`)

    // Which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);

}

function reportStreets(s) {

    console.log('------Streets Report------');

    // Total and average length of town's streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

    // Classify size of streets
    s.forEach(el => el.classifyStreet());

}

reportParks(allParks);
reportStreets(allStreets);





























