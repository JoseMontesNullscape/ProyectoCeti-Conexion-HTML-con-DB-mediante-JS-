//Conexion
const mysql = require('mysql2/promise')
//promise Tengo un dato, pero no se que dato
//"Vas a tener el nombre de un cliente, pero no vas a saber cual"

require('dotenv').config();

async function conexion() {
    const db = await mysql.createConnection({ //esto es una conexion 1 a 1, pero existe otro metodo llamado
        //createPool: se pueden crear distintas conexiones y distribuir la carga de trabajo.
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME,
        port: Number(process.env.DB_PORT)

    });
    return db;
}

module.exports = conexion; //este define al modulo como exportable-