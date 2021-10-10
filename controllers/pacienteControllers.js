const Paciente = require('../models/paciente')

module.exports.mostrar = (req,res)=>{
    Paciente.find({},(error,Paciente)=>{
        if(error) {
            return res.status(500).json({
                message:'error mostrando pacientes en controllers'
            })
        }
        return res.render('index', {paciente:Paciente})
    })
}

//Crear
module.exports.crear = (req, res)=>{
    console.log(req.body)
    const paciente = new Paciente({
        nombre: req.body.nombre,
        edad: req.body.edad
    })
    paciente.save(function(error,alumno){
        if(error){
            return res.status(500).json({
                message: 'Error al crear el Alumno'
            })
        }
        res.redirect('/')
    })
}

//Editar
module.exports.editar = (req,res)=>{
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const edad = req.body.edad_editar
    Paciente.findByIdAndUpdate(id, {nombre, edad}, (error, paciente)=>{
        if(error){
            return res.status(500).json({
                message: 'Error actualizando el Alumno'
            })
        }
        res.redirect('/')
    })
}

//Borrar
module.exports.borrar = (req, res)=>{
    const id = req.params.id
    Paciente.findByIdAndRemove(id, (error, alumno)=>{
        if(error){
            return res.status(500).json({
                message: 'Error eliminando el Alumno'
            })
        }
        res.redirect('/')
    })
}

