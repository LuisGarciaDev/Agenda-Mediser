const express = require('express');
const app = express()

const db = require('./db');
const paciente = require('./models/paciente');

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'))

const Pacientes = require('./routers/pacientes')
app.use(Pacientes)

app.get('/',(req,res)=>{
    res.send('hola cavernicolas')
}) 

app.listen(3000, ()=>{
    console.log('servidor bien')
})
