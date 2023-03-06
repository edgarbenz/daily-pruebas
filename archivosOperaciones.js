const fs = require('fs');

console.log('Antes de leer el archivo...');
// Leer un archivo
const archivo = fs.readFileSync('index.html', 'utf-8');
console.log(archivo);
console.log('Despues de leer el archivo...')

// Cambiar el nombre de un archivo
try {
  fs.renameSync('index.html', 'main.html');  
  console.log('Archivo renombrado satisfactoriamente');
} catch(error) {
  console.log('Ocurrio un error tipo: ',error);
}
console.log('Despues de cambiar el nombre del archivo...')

// Agregar contenido al final del archivo
try {
  fs.appendFileSync('main.html', '<p>Hola</p>');
  console.log('Contenido agregado satisfactoriamente');
} catch (error) {
  throw error;
}
console.log('Despues de agregar contenido al final del archivo...');

// // Reescribir completamente un archivo por otro contenido
try {
  fs.writeFileSync('main.html', 'Contenido nuevo')
  console.log('Contenido reemplazado totalmente');
} catch (error) {
  throw error;
}
console.log('Despues de re-escribir el archivo...');

// // Borrar un archivo
try {
  fs.unlinkSync('main.html');
  console.log('Archivo Borrado');
} catch (error) {
  throw err;
}
console.log('Despues de borrar el archivo...');