// Requerimos express y lo ejecutamos para tener disponibles todos los metodos que vamos a precisar
const express = require('express');
const app = express();
// Modulo nativo para manejar las rutas de los archivos
const path = require('path');
// Puerto
const port = process.env.PORT || 3000;
// Usando recursos estáticos.
app.use(express.static( './public' ));
// Ponemos a escuchar el servidor
app.listen(port, () => console.log('Servidor corriendo en http://localhost:' + port));
// Definimos las rutas a los distintos pedidos que nuestro sitio sabe responder
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, './views/index.html')));
app.get('/register', (req, res) => res.sendFile(path.resolve(__dirname, './views/register.html')));
app.get('/login', (req, res) => res.sendFile(path.resolve(__dirname, './views/login.html')));
