
const { crearArchivo}=require('./helpers/multiplicar')
require('colors');
const argv = require('./config/yargs');

console.clear();

crearArchivo( argv.b, argv.l,argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.yellow, ' creado'.yellow))
    .catch( err => console.log(err))






















