const express = require('express');
const routerApi = require('./router') //aqui estamos llamando el modulo de rutas
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Creando la conexión a la base de datos
const connection = mysql.createConnection({
  host: '34.22.222.92',
  user: 'root',
  password: 'Yoma2024**oz',
  database: 'test-database'
});

connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

app.use(express.json());      // con este ajustes ya puedes recibir informacion de tipo json en el insomia

routerApi(app);       // aqui estamos definiendo la funcion de las rutas y le pasamos app

app.listen(port, () =>{
  console.log('<h1>el puesto es ' + port)
})
