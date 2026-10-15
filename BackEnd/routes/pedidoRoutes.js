const express = require('express');

const router = express.Router();

const pedidosController = require('../controllers/pedidosController');

//pedido llama a pedidos controller que a su ves llama a registrar pedido
router.post('/pedido', pedidosController.registrarPedido);