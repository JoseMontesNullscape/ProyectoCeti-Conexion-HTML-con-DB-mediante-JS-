const express = require('express');
const path = require('path');
const app = express();

// CORREGIDO: Se agregaron los paréntesis para que cargue el .env
require('dotenv').config();

const pedidosRouter = require ('./routes/pedidoRoutes.js');

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../FrontEnd')));

// Aquí montas tu router de pedidos
app.use(pedidosRouter);

app.get('/', (req, res) => {
    res.send('Hola mundo este es el back end');
});

// Nota: Como ya tienes la ruta '/pedido' en tu archivo pedidoRoutes.js,
// tener otra aquí abajo puede causar conflictos. Lo ideal es manejarla 
// en un solo lugar (o en el controlador o en el router).
app.post('/pedido', (req, res) => {
    const cliente = req.body.cliente;
    const producto = req.body.producto; // (Tenías un pequeño typo aquí: req.bodu)
    res.sendFile(path.join(__dirname, '../frontend/resumen.html'));
});

// Inicia el servidor y escucha las solicitudes por el puerto 3000
app.listen(3000, () => {
    console.log('Servidor ejecutándose en el puerto 3000');
});