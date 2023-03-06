const http = require('http');

const servidor = http.createServer((request, result) => {
  console.log('====> request (solicitud)');
  console.log(request.url);
  console.log(request.method);
  console.log(request.headers);
  result.end('Hola Mundo');
});

const PUERTO = 3000;
servidor.listen(PUERTO, () => {
  console.log(`Servidor escuchando en http://localhost:${PUERTO}`);
});