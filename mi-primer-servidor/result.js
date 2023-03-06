const http = require('http');

const servidor = http.createServer((req, res) => {
  console.log('res - RESULTADO');
  console.log(res.statusCode);
  // res.statusCode = 404;
  // console.log(res.statusCode);

  res.setHeader('content-type', 'application/json')
  console.log(res.getHeaders());

  res.end('Hola Mundo');
})

const PORT = 3000;
servidor.listen(PORT , () => {
  console.log(`Servidor Escuchando en http://localhost:${PORT}`);
});