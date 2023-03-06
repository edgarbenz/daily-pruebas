const express = require('express');
const app = express();
const {infoCursos} = require('./datos/cursos');
const routerProgramacion = require('./routers/programacion.js');
const routerMatematicas = require('./routers/matematicas.js');

const PUERTO = process.env.PUERTO || 3000; // process.env son las variables de entorno

app.use('/api/cursos/programacion', routerProgramacion);  // asocio a ese router ese camino o path

app.use('/api/cursos/matematicas',  routerMatematicas);

// Routing
app.get('/', (req, res) => {
  res.send('Mi primer servidor con Express 💻😎')
});

app.get('/api/cursos', (req,res) => {
  res.send(JSON.stringify(infoCursos));
});

app.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en  el puerto ${PUERTO}...`);
});

