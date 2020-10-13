const moongose = require('mongoose')

if(process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@cluster0.6tnww.mongodb.net/phonebook?retryWrites=true&w=majority`

moongose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new moongose.Schema({
    name: String,
    number: String,
})

const Person = moongose.model('Person', personSchema)

const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
}) 

if(process.argv.length == 3) {
    console.log('phonebook:')
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person)
        })
        moongose.connection.close()
    })
} else if (process.argv.length == 5) {
    person.save().then(result => {
        console.log(`added ${person.name} number ${person.number} to phonebook`)
        moongose.connection.close()
    })
} else {
    moongose.connection.close()
}