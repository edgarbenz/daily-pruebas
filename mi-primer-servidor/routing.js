const http = require('http');
const {infocursos} = require('./cursos');  // esto quiere decir que en esta misma carpeta hay un archivo cursos.js

const servidor = http.createServer((req, res) => { // esto es lo que va a ocurrir cuando el servidor reciba una solicitud
  const {method} = req;  // req.method
  switch(method) {
    case 'GET':
      return manejarSolicitudGet(req, res);
    case 'POST':
      return manejarSolicitudPost(req,res);
    default:
      res.statusCode = 501;
      res.end(`El metodo "${method}" no puede ser manejado por el servidor`);
  }
});

function manejarSolicitudPost(req, res) {
  const path = req.url;
  console.log(`path: ${path}`)
  switch (path) {
    case '/api/cursos/programacion':

      let cuerpo = '';
      req.on('data', contenido => { // el evento data se activara cuando la solicitud lleve datos o un body
        cuerpo += contenido.toString();
      });
      req.on('end', () => {  // el evento end se activa cada que termine la solicitud
        console.log(cuerpo);
        console.log(typeof cuerpo);

        cuerpo = JSON.parse(cuerpo);
        console.log(typeof cuerpo)
        console.log(cuerpo.titulo);
        
        return res.end('El servidor recibio una solicitud POST para /cursos/programacion');
      })
      break;
      // return res.end('El servidor recibio una solicitud POST para /cursos/programacion');
    default:
      res.statusCode = 404;
      return res.end(`Error ${res.statusCode} - Pagina No Encontrada`)
      break;
  }
}

function manejarSolicitudGet(req, res) {
  const path = req.url;

  console.log(res.statusCode);
  switch (path) {
    case '/':
      const respuestaJSON = JSON.stringify({'respuesta': 'Bienvenidos a mi primer servidor y API creados con Node.js'})
      res.writeHead(200, {'Content-Type': 'application/json'});
      return res.end(respuestaJSON);
      break;
    case '/api/cursos':
      return res.end(JSON.stringify(infocursos)); // cursos = module.exports osea un objeto, 
      break;
    case '/api/cursos/programacion':
      return res.end(JSON.stringify(infocursos.programacion));
      break;
    default:
      res.statusCode = 404;
      return res.end(`Error ${res.statusCode} - Pagina No Encontrada`);
      break;
  }

  // if (path === '/') {
  // } else if (path === '/cursos') {
  // } else if (path === '/cursos/programacion') {
  // }
}

const PORT = 3000;
servidor.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}...`)
});