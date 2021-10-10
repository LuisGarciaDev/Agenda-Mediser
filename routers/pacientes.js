    const express = require('express')
    const router = express.Router()

    const pacienteController = require('../controllers/pacienteControllers')

    //Mostrar todos los alumnos (GET)
    router.get('/', pacienteController.mostrar)
//Crear alumno (POST)
    router.post('/crear', pacienteController.crear)
//Editar alumno (POST)
    router.post('/editar', pacienteController.editar)
//Borrar alumno (GET)
    router.get('/borrar/:id', pacienteController.borrar)

    module.exports = router


