const iconv = require('../../node_modules/mysql2/node_modules/iconv-lite/lib');
iconv.encodingExists("foo");

const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

//aqui a gente carrega na memoria os dados do .env
dotenv.config();

const USER_NAME = process.env.DB_USER;
const USER_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
const DB_HOST = process.env.DB_HOST;

async function connect() {
    const con = await mysql.createConnection({
         user: USER_NAME,
         password: USER_PASS,
         host: DB_HOST,
         database: DB_NAME,
         timezone: '-03:00',
    });

    return con;
}

async function execute(sql) {
    const connection = await connect();

    const [rows, fields] = await connection.execute(sql);

    return rows;
}

module.exports = {
    execute,
    connect
};
