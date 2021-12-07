const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port:3306
});

connection.connect((err) => {
    if(err){
        console.log('NO connection with mysql > ', err)
    }else{
        console.log('Connection database with success...'); 
    }
  })


module.exports = connection;