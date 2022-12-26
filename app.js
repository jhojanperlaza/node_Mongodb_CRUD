const express = require('express');
const app = express();


//conect with data base
const db = require('./db')

//The template engine 'ejs' is added
app.set('view engine', 'ejs');

// To put in json format the data that I save:
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

//load static files
app.use(express.static('public'))

//call routes
const alumnos = require('./routes/alumnos')
app.use(alumnos)

app.get('/', (req, res) => {
    res.send("hello world")
})

app.listen(3000, ()=>{
    console.log('Server UP! in http://localhost:3000');
})
