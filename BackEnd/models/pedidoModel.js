//this nigga sirve para pedir modelos de econsultas, wow
//modelo y servicio
const db = require('../config/database')
//se crean metodos asincronicas en el que van a estar en espera de un evento
async function registrarPedido(cliente, producto, cantidad, comentarios) {
    const sql = `
    INSERT INTO pedidos (cliente, producto, cantidad, comentarios)
    VALUES (?,?,?,?)`;

    //Se crea un arreglo de pedidos en el que 
    const [resultado] = await db.execute(sql, [
    cliente,
    producto,
    cantidad,
    comentarios
    ]);
    return resultado.insertId;
    //retorna un 3 si se metieron los resultados
}

//En caso de tener mas funciones, se agregan aca como si fueran modelos
module.exports =  
{
    registrarPedido
}
