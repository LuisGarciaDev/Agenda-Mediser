const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pacienteSchema = new Schema ({
    nombres : String,
    apellidos: String,
    edad : Number,
    email: String,
    direccion: String,
    telefono: Number,
    date:{type: Date}
},{versionKey:false})

module.exports = mongoose.model('pacientes', pacienteSchema)