const http = require('http');
let contador = 0;

const servidor = http.createServer((req, res) => { // cada que recibe una solicitud ejecuta esta funcion, req_ solicitud del cliente, res: respuesta del servidor
  contador++;
  console.log(`Solicitud nueva ${contador}`);
  res.end('Hola mundo');
});

const PUERTO = 3000;
servidor.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en http://localhost:${PUERTO}...`);
});