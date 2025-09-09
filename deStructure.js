export var user = {
    name : "raghu",
    salary: 20000,
    experience: "midlevel",
    technology: "Pega"
}

var name = user.name
var salary = user.salary
var experience = user.experience
var technology = user.technology

// instead of above way of writing we can use below way of writing
var {name:userName,salary:income,experience:expertise,technology:techStack} = user // this is called destructuring in objects

console.log(techStack)
