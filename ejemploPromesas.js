const estatusPedido = () => {
  const estatus = Math.random() < 0.8;
  console.log(estatus);
  return estatus;
}

const miPedidoDePizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if(estatusPedido()) {
      resolve('¡Pedido exitoso! Su pizza esta en camino');
    } else {
      reject('Ocurrio un error. Por favor intente nuevamente.');
    }
  }, 3000);
});

miPedidoDePizza.then((valor) => {
  console.log('Pizza entregada');
}).catch((error) => {
  console.log(error);
});