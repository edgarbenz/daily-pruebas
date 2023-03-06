function ordenarResultados (req, datos, clavesValidasBD) {
    const valorURL = req.query.ordenar;     // URL: parametroURL=valorURL, URL: ordenar='titulo',  y en la BD: claveBD=valorBD, titulo='Aprende Python'
    console.log(`valorURL= ${valorURL}`);
    if (valorURL === undefined || valorURL.length === 0) {
      console.log('Parametro query "ordenar" vacio');
      return datos;
    } else if (! clavesValidasBD.includes(valorURL)) {
        console.log(`Valor del parametro query "ordenar" invalido`)
        return datos;
      } else {
        console.log('entro en el if clavesValidasBD.includes(valorURL)', clavesValidasBD.includes(valorURL))
        console.log('datos= ',datos[0][valorURL])
        const curso = datos[0];
        const clave = curso[valorURL];  // curso.valorURL = curso.visitas
          switch (typeof clave) {
            case 'string' :
              console.log('tipo string. ',valorURL)
              return JSON.stringify(datos.sort((b, a) => {
                const nameA = JSON.stringify(a[valorURL]).toUpperCase();
                const nameB = JSON.stringify(b[valorURL]).toUpperCase();
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
                  return 0;
              }))
            break;
            case 'number':
              console.log('tipo number. ')
              return JSON.stringify(datos.sort((a, b) => a[valorURL] - b[valorURL]));
            break;
            default:
              throw new Error('Valor URL no valido');
            break;
          }
        }
  }

  module.exports = ordenarResultados;