const express = require('express');
const routerMatematicas = express.Router();

const {matematicas} = require('../datos/cursos.js').infoCursos;
const ordenarResultados =  require('../funciones/ordenarDatos.js')

routerMatematicas.get('/:titulo', (req, res) => {
  const titulo =  req.params.titulo; //con esto obtengo lo que escribio el usuario o cliente o web
  const resultados = matematicas.filter(curso => curso.titulo === titulo);
  if (resultados.length === 0) {
    return res.status(404).send(`No se tiene informacion del titulo: ${titulo}🚫`);
  }
  const clavesValidasBD = 'id titulo tema visitas nivel';
  return res.status(200).json(ordenarResultados(req, resultados, clavesValidasBD));
});

routerMatematicas.get('/', (req, res) => {
  res.status(200).json(matematicas);
});

module.exports = routerMatematicas;