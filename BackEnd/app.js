const express = require('express');
const path = require('path');
const app = express();

//BODRIO QUE SE AGREGO EL 08/10/2026
require('dotenv').config;

const pedidosRouter = require ('./routes/pedidoRoutes.js');

app.use (express.urlencoded({extended: true})); // DIRECTOROO
app.use (express.static(path.join(__dirname, '../FrontEnd')))
app.usea(pedidosRoutes);

app.get('/',(req, res) =>{
	res.send('Hola mundo este es el back end'); //Respuesta
});

app.post('/pedido', (req, res) => {
	const cliente = req.body.cliente;
	const producto = req.bodu.producto
	res.redirect(`/resumen.html?cliente=${cliente}`);
})

//pos, aqui se agregan todos los datos del formulario.l
app.post("/localhost:3000/pedido", (req,res) =>{
	const cliente = req.body.cliente;
	const producto = req.body.producto;	
	//definir una respuesta enviada
	/*res.send(`
		<!DOCTYPE html>
		<html lang es>
			<head>
				<meta charset = "UTF-8">
				<title>Resumen del pedido</title>
			</head>
			<body>
				<h1>Resumen del producto</h1>
				<p><strong>Cliente: </strong> ${cliente}</p>
				<h2>Pedido Recibido </h2>
			</body>
		</html>
		`);*/
	res.sendFile(path.join(__dirname, '../frontend/resumen.html'))
});

//Inicia el servidor y escucha la solicitudes por el puerto 3000;
app.listen(3000, () =>{
	console.log('Servidor ejecutandose en el puerto 3000');
});