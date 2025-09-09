// var vs let
// let has block level scope and var has global scope if defined outside a function. if defined inside a function it will have function scope

for(let i=0; i<10; i++){
    //console.log("i is accessale", i)
}

//console.log("i is accessale", i)

for(var j=11; j<20; j++){
    //console.log("j is accessale", j);
}

//console.log("j is accessale", j)


let name = "raghu"
const trainer = "ashu"

//trainer="lekhi"
// constant variable cannot be changed
// console.log(trainer)

//how do we define functions in java script and classes are not at all used in react and new concept came into picture which is called hook
// below is named function and can be called before its declarartion like below and mostly we use named functions
//trainingNamedFunction()
function trainingNamedFunction(){ // function declaration
    console.log("----")
}

// below is unnamed function
//unnamed functions cannot be called before its declarartion like below ands when we use arrow functions are used then we use this type of usage
//learn about arrow functions
//trainingUnNamedFunction()
var trainingUnNamedFunction = function(){ // function exprerssion
    console.log("****")
}

trainingNamedFunction()
//trainingUnNamedFunction()

function squareNamedFunction(num){
    return num*num
}

var squareUnNamedFunction = num => num*num
var squareUnNamedFunctionmultiLine = (num) => {
    return num*num
}

var squareUnNamedFunctionmultiLineWithoutInput = () => {
    return 20
}
// this is arrow functions where u write code with in the declarartion, here numFunc is the declaration
// and num*num return the value directly and usage of arrow, unnamed functions and names functions does not differ

console.log(squareNamedFunction(2))
console.log(squareUnNamedFunction(2))
console.log(squareUnNamedFunctionmultiLine(3))
console.log(squareUnNamedFunctionmultiLineWithoutInput())

function greet(name1,name2,name3){
    console.log("hey" , name1, name2, name3)
}

function greetOthers(...xyz){ // these three dots in functions are called rest parameter which can collect all inputs as an array
    console.log("hey" , xyz)
    console.log(xyz[3])
}

greet("raghu","ram","sudha","harshini")// here harshini is ignored as functions accepts 3 params
greetOthers("raghu","ram","sudha","harshini")



//when we deal with react we deal with data and it deals with arrays and objects
// Below is declaration of object user
var user = {
    name:"raghu",
    experience:"midlevel",
    technology:"JS",
    activities:[]
}
//in js no of object means no of curly braces. so in below example there are 2 objects

var user1 = {}
var user2 = {}
var user3 = user2 // here new object is not getting created but user3 is referring to user2

//in below example new object user4 is getting created. Here ... copies all data from user2 to newly created user4.
var user4 = {...user2} // this is called spread operator in arrays and objects used to copy data from one object to another object
var friends = ["raghu","ram","sudha","harshini"]
var friends1 = [...friends,"Ashu"]
console.log(friends1)