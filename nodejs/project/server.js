const mongoose = require('mongoose');

// importando para pode utilizar as variáveis de ambiente
require('dotenv').config({path:'.env'}); 


mongoose.connect(process.env.DATABASE, { useNewUrlParser: true }); // conexão ao banco
mongoose.Promise = global.Promise; // permitir usar Promises | async - await
// Configuração para exibir os errors no console
mongoose.connection.on('Error', error => {
    console.error(`ERROR: ${error.message}`); 
});

// Carregando todos os models
require('./models/Post');


const app = require("./app");

// Realizar a conexão ao servidor 
app.listen(process.env.PORT || 7777, () => {
    console.log(`Runding server - port: ${process.env.PORT || 8000}`);
});  