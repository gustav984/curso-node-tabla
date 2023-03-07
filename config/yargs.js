
const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption:true,
        describe: 'Es la base de la tabla de multiplicar',
    })
    .option('l',{
        alias: 'listar',
        type:'boolean',
        default: false,
        describe: 'Muestra la tabla en consola',
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Hasta donde realiza la tabla',
    })
    .check( ( argv , options) =>{
        
        if(isNaN(argv.b)){
            throw 'El argumento debe ser un entero'
        }

        if(isNaN(argv.h)){
            throw 'El hasta debe ser un entero'
        }
                  
        return true;
    })           
    .argv

module.exports = argv;






















