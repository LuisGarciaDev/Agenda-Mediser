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

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), ()=>{

    console.log('server on port', app.get('port'));
});
