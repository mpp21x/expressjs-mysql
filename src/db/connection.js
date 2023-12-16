// get the client

const mysql = require('mysql2/promise');

let connection;

const getConnection = async ()=> {

    if(connection) return connection;

    connection = await mysql.createConnection({
        host: 'app-db',
        user: 'root',
        password: 'root',
        database: 'app'
    });

    return connection;
};

module.exports = getConnection;
