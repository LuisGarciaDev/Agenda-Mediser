const mongoose = require('mongoose')
const url = 'mongodb://localhost/db_pacientes'

//mongoose.connect(url,{
   // useNewUrlParser:true,
 //   useUnifiedTopology:true,
//    useFindAndModify:false,
//    useCreateIndex:true
//})
// .then( ()=>console.log('conectado a mongo'))
// .catch( (e)=>console.log('el error de conexion es:'+e))


//await mongoose.connect('mongodb://localhost/db_pacientes');

//const db = mongoose.connect
//db.on('error', console.error.bind(console,'error al conectar mongodb'))
//db.once('open', function callback(){
//    console.log("conectado a mongodb")
//})


//module.exports = db

//const mongoose = require('mongoose');
//const uri = 'mongodb://localhost:27017/myapp';
const options = {useNewUrlParser: true, useUnifiedTopology:true};
// Or using promises
mongoose.connect(url, options).then(
/** ready to use. The `mongoose.connect()` promise resolves to
mongoose instance. */
() => { console.log('Conectado a DB') },
/** handle initial connection error */
err => { console.log(err) }
);