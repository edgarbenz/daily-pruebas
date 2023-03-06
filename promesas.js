const promesaCumplida = true;

const miPromesa = new Promise((resolve, reject) => { //Primise es la clase,qe contiene a las funciones resolve y reject y por eso se las puedo pasar como parametros a la funcion flecha para que las use adentro y me las active segun le convenga
  setTimeout(() => {
    if (promesaCumplida) {
      resolve('¡Promesa cumplida!');
    } else {
      reject('Promesa rechazada...');
    }
  },3000);
});

miPromesa.then((valor) => {
  console.log('Promesa cumplida!');
});

function edgar(valor) {
  console.log(`Funcion edgar ejecutada ${valor}`);
}

function parmenides(funcioncita) {
  console.log(`Funcion parmenides`);
  funcioncita();
}

parmenides(edgar(1));
// parmenides(() => {edgar(1)});