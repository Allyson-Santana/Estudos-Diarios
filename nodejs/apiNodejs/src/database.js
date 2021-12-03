const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS
});

try {
    connection.connect( () => 
        console.log('Connection database with success...'));
} catch (error) {
    console.error(`ERROR: ${error}`);
}


module.exports = connection;