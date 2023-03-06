const express = require('express');
const routerProgramacion = express.Router();

const {programacion} = require('../datos/cursos.js').infoCursos;
const ordenarResultados = require('../funciones/ordenarDatos.js');

routerProgramacion.use(express.json());

routerProgramacion.get('/', (req, res) => {
  res.status(200).json(programacion);
});

routerProgramacion.get('/:lenguajee', (req, res) => {
  const lenguaje = req.params.lenguajee;             // para obtener que lenguaje pide el cliente o navegador
  const resultados = programacion.filter(cursos => cursos.lenguaje === lenguaje);// infoCursos es un objeto, infoCursos.Programacion es un arreglo, filter filtra arreglos, y se le puede mandar una funcion (objeto que es cada elemento del arreglo) { if(objeto.lenguaje === lenguajee) {return objeto} }
  if (resultados.length === 0) {
    return res.status(404).send(`No se tiene informacion del lenguaje ${lenguaje} 👀`);
  }
  const clavesValidasBD = 'id titulo lenguaje visitas nivel';
  return res.status(200).json(ordenarResultados(req, resultados, clavesValidasBD));
});

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;
  const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);
  if (resultados.length === 0) {
    return res.status(204).send(`No se tienen cursos de ${lenguaje} ${nivel}`);
  }
  const clavesValidasBD = 'id titulo lenguaje visitas nivel';
  return res.status(200).json(ordenarResultados(req, resultados, clavesValidasBD));
});

routerProgramacion.post('/', (req,res) => {
  const cursoNuevo = req.body;
  if (!(cursoNuevo.hasOwnProperty('id') && cursoNuevo.hasOwnProperty('titulo') && cursoNuevo.hasOwnProperty('lenguaje') && cursoNuevo.hasOwnProperty('visitas') && cursoNuevo.hasOwnProperty('nivel'))) {
    res.status(418).send('Faltan campos para dar de alta un curso nuevo');
  } else {
    programacion.push(cursoNuevo);
    res.status(200).json(programacion)
  }
});

routerProgramacion.put('/:id', (req, res) => {
  const id = req.params.id;
  const cursoActualizado = req.body;
  const indice = programacion.findIndex(curso => curso.id == id);

  if (indice === -1) {
    res.status(404).send(`El curso con el indice: ${id} solicitado por el usuario no fue encontrado en la base de datos del servidor`);
  } else if (indice >= 0) {
    programacion[indice] = cursoActualizado;
  }
  res.status(200).json(programacion);
});

routerProgramacion.patch('/:id', (req, res) => {
  const registroBody = req.body;
  let indice = req.params.id;

  if (isNaN(indice)) {
    res.status(400).send(`el id= ${indice} no es un numero`);
  } else {
    const indiceBD = programacion.findIndex(registro => registro.id == indice);
    if (indiceBD < 0) {
      res.status(400).send(`El id ${indice} no valido`);
    } else {
      const registroActualizado = Object.assign(programacion[indiceBD], registroBody);
      programacion[indiceBD] = registroActualizado; // B
      res.status(200).json(programacion);
    }
  }
});

routerProgramacion.delete('/:id', (req, res) => {
  const id = req.params.id;
  if (isNaN(id)) {
    res.status(400).send(`El id ${id} no es valido, debe ser numerico`);
  } else {
    const indice = programacion.findIndex(curso => curso.id == id);
    if (indice < 0) {
      res.status(404).send('No se encontro el id de la entidad a borrar');
    } else {
      programacion.splice(indice, 1);
      res.status(200).json(programacion);
    }
  }
});

module.exports = routerProgramacion;