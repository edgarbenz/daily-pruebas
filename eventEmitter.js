const EventEmitter = require('events'); // modulo 'events' regresa una clase llamada 'EventEmitter'

const emisorProductos = new EventEmitter(); // creamos una nueva instancia de la clase 'EventEmitter'

emisorProductos.on('compra', (total, numProductos) => {
  console.log(`Total de la compra $${total}`);
  console.log(`Numero de productos: ${numProductos}`);
});

emisorProductos.emit('compra', 500, 6);