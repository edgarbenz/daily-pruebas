function saludar(nombre) {
  return `Hola ${nombre}`;
}

function holaMundo() {
  return '¡Hola Mundo!';
}

// module.exports.saludarya = saludar;
// module.exports.holaMundo = holaMundo;
module.exports = {
  saludarya: saludar,
  holaMundo: holaMundo
};