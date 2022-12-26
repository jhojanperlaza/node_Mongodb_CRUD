const mongoose = require('mongoose')
const url = 'mongodb://localhost/db_alumnos'

mongoose.set('strictQuery', false);
mongoose.connect(url)

const db = mongoose.connection
db.on('error', console.error.bind(console, "error connecting to Mongo"))
db.once('open', function callback() {
    console.log("connection to Mongo successfully")
})

module.exports = db
