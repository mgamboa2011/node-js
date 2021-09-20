const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = '';

    for (i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }
    if (listar) {
      console.log(('============'.green));
      console.log(`table del: ${base}`)
      console.log('============'.green);
      console.log(colors.cyan(salida));
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;

  } catch (error) {
    throw error;
  }
}

module.exports = {
  crearArchivo
}