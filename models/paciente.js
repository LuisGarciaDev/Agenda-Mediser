const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pacienteSchema = new Schema ({
    nombre : String,
    edad : Number
},{versionKey:false})

module.exports = mongoose.model('pacientes', pacienteSchema)