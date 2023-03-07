const fs=require('fs');
const colors = require('colors');

const crearArchivo =async ( base = 5, listar, hasta)=>{

    try{
      if(listar){
        console.log('============================='.green);
        console.log('      Tabla del:'.green, colors.blue(base));
        console.log('============================='.green);
      }
      
            
      let salida ='';
      let consola ='';
             
      for(let i=1;i<=hasta;i++){
          salida +=`${base} x ${i} = ${base*i}\n`;
          consola +=`${base} ${'x'.red} ${i} ${'='.blue} ${base*i}\n`;
      }
                 
      if(listar){
        console.log(consola);
      }
                
      fs.writeFileSync( `./salida/tabla-${base}.txt`,  salida);
          
      return `Tabla-${base}.txt`;
            

    }catch( error){  
        throw error;
    }

}

module.exports = {
crearArchivo
}

