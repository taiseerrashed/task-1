const fs = require("fs")

// 1- addPerson()
const addPerson = (id, fname, lname, age, city) => {
    const allData = loadData()

    const duplicatedId = allData.filter((person) => {
        return person.id === id
    })
    if(duplicatedId.length == 0){
        if(id <= 7){
            allData.push({
                id: id,
                fname: fname,
                lname: lname,
                age: age,
                city: city
            })
        }else{
            console.log("Error out of range")
        }
        saveAllData(allData)
    }else{
        console.log("Error duplicated Id")
    }
}
// loadData()
const loadData = () =>{
    try{
        const dataJson = fs.readFileSync('alldata.json').toString()
        return JSON.parse(dataJson)
    }catch{
        return []
    }
}
// saveData()
const saveAllData = (allData) => {
    const saveAllDataJson = JSON.stringify(allData)
    fs.writeFileSync('alldata.json' , saveAllDataJson)
}

// 2- deletePerson()
const deletePerson = () =>{
    const allData = loadData()
    const dataToKeep = allData.filter((person)=>{
        return person.id < 4 || person.id > 6
    })
    saveAllData(dataToKeep)
}
// 3- listData()
const listData = () => {
    const allData = loadData()
    allData.forEach((person) => {
        console.log(person.fname , person.lname)
    });
}
// 4- readData()
const readData = () => {
    const allData = loadData()
    const itemNeeded = allData.find((person)=>{
        return person.id === 5
    })
    if(itemNeeded){
        console.log("Data for the 5th person:", itemNeeded)
    }else{
        console.log("Idneeded not found")
    }
}


module.exports = {
    addPerson,
    deletePerson,
    listData,
    readData
}