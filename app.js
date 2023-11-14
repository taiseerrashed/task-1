const fs = require("fs")

// 1- create object person
const person = {
    fname: "Ahmed",
    lname: "Hossam",
    age: 20,
    city: "Alex"
}
console.log(person)

// 2- change object to json
const personJson = JSON.stringify(person)
console.log(personJson)

// 3- store in file
fs.writeFileSync('data.json', personJson)

// 4- read file
console.log(fs.readFileSync('data.json').toString())

// 5- convert to object
const personObj = JSON.parse(personJson)
console.log(personObj)

// 6- update data
personObj.fname = "Adel"
personObj.lname = "Ahmed"
personObj.age = 40
personObj.city = "Cairo"
console.log(personObj)

// 7- convert object to json
const updatedPersonJson = JSON.stringify(personObj)
// console.log(updatedPersonJson)

// 8- store in file
fs.writeFileSync('data2.json', updatedPersonJson)
// ///////////////////////////////////////////////////////////////////////////////////////

const data = require("./data")
const yargs = require("yargs")

// 1- command to add
yargs.command({
    command: "add",
    describe: "to add an item",
    builder: {
        id:{
            describe: "this is id desc in add command",
            demandOption: true,
            type: "number"
        },
        fname:{
            describe: "this is the first name in add command",
            demandOption: true,
            type: "string"
        },
        lname: {
            describe: "this is the last name in add command",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x)=>{
        data.addPerson(x.id , x.fname , x.lname , x.age , x.city)
    }
})

// 2- Command to Delete
yargs.command({
    command: "delete",
    describe: "to delete an item",
    handler: () => {
        data.deletePerson()
    }
})
// 3- command to list
yargs.command({
    command: "list",
    describe: "to list data",
    handler: () => {
        data.listData()
    }
})

// 4- command to read data
yargs.command({
    command: "read",
    describe: "to read data",
    handler: () => {
        data.readData()
    }
})

yargs.parse()