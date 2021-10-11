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

/*router.get('/models/paciente', async(req,res)=>{
    const _id=req.params.id;

    try{

        const paciente= await paciente.findOne({_id});
        res.json(paciente);

    } catch (error){

    }
})*/

//Crear
module.exports.crear = (req, res)=>{
    console.log(req.body)
    const paciente = new Paciente({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        edad: req.body.edad,
        email: req.body.email,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        date: req.body.date
        
    })
    paciente.save(function(error){
        if(error){
            return res.status(500).json({
                message: 'Error al crear'
            })
        }
        res.redirect('/')
    })
}

//Editar
module.exports.editar = (req,res)=>{
    const id = req.body.id_editar
    const nombres = req.body.nombre_editar
    const apellidos = req.body.apellido_editar
    const edad = req.body.edad_editar
    const email = req.body.email_editar
    const direccion = req.body.direccion_editar
    const telefono = req.body.telefono_editar
    const date = req.body.date_editar


    Paciente.findByIdAndUpdate(id, {nombres, apellidos, edad, email, direccion, telefono, date}, (error, paciente)=>{
        if(error){
            return res.status(500).json({
                message: 'Error actualizando información'
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
                message: 'Error eliminando cliente'
            })
        }
        res.redirect('/')
    })
}

