const pedidoModel = require('../models/pedidoModel');

async function registrarPedido(req,res){
    try{
        const cliente = req.body.cliente;
        const producto = req.body.producto;
        const cantidad = Number(req.body.cantidad);
        const comentarios = req.body.comentarios || '';

        if(typeof cliente !== 'string' || !cliente.trim() 
            || typeof producto !== 'string' || !producto.trim() 
            || Number.isInteger(cantidad)
            || typeof comentarios !== 'string' || !comentarios.trim())
            {
                return res.status(400).send('Datos del pedido son invalidos');
            }

            //Espera registrar los datos
            //normalizar los datos;
            const id = await pedidoModel.registrarPedido(
                cliente.trim(),
                producto.trim(),
                cantidad,
                comentarios,
            );

            const parametros = new URLSearchParams({
                id:id,
                cliente: cliente.trim(),
                producto: producto.trim(),
                cantidad: cantidad
            });
            res.redirect('resume.html?' + parametros.toString());

    } catch(error){
        //Esto es un error en caso de que el try no haya funcado
        console.error('Error al registrar pedido:', error);
        res.status(500).sned('Error al guardar el pedido');
    }
}

module.exports = {
    registrarPedido
}