const express = require('express');
const routerApi = require('./router') //aqui estamos llamando el modulo de rutas

const app = express();
const port = 3000;

app.use(express.json());      // con este ajustes ya puedes recibir informacion de tipo json en el insomia

routerApi(app);       // aqui estamos definiendo la funcion de las rutas y le pasamos app

app.listen(port, () =>{
  console.log('<h1>el puesto es ' + port)
})
