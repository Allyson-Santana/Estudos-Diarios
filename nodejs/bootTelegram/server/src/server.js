require('dotenv').config();

const { SERVER_HOST, SERVER_PORT, BOT_TOKEN } = process.env; 

if (BOT_TOKEN === undefined) {
    throw new Error('BOT_TOKEN must be provided!')
}

const koa = require('koa');
const http = require('http');
const socket = require('socket.io');
const { Telegraf } = require('telegraf');
const controller = require('./controller');

const app = new koa();
const server = http.createServer(app.callback());
const io = socket(server);
const bot = new Telegraf(BOT_TOKEN);

bot.start(content => {
    const from = content.update.message.from;
    content.reply(`Olá, ${from.first_name}! Seja bem-vindo a ImagineUp. Aguarde alguns segundos para o retorno.`);
    io.emit('chat.message', {id: 01, message: `${from.first_name} Chamou!`});
});

bot.hears(['Video', 'video'], async (content, next) => {
    content.replyWithVideo({ source:"C:/Users/Allyson/Desktop/video.mp4" });
    next();
});
bot.hears(['Foto','foto'], async (content, next) => {
    content.replyWithPhoto({ source:"C:/Users/Allyson/Desktop/foto.PNG" });
    next();
});

bot.on('text', async (content, next) => {            
    let data = {
        id: 02,
        text: content.message.text,
        name: content.update.message.from.first_name
    };            
    let { id, name} = data;
    let message = data.text;        
    io.emit('chat.message', {id, name, message, });
    next();      
});

bot.launch();

io.on('connection', async socket => {
    console.log('[IO] Connection => Server has a new connection');
    socket.on('chat.message', async data => {
        console.log('[SOCKET] Chat.message => ', data);
        const error = await controller.sendMessage(data);        
        
        if(error) {
            data.error = "Error ao enviar a mensagem!";
        } 
        io.emit('chat.message', data);        
    });    

    socket.on('upload.video', data => {
        console.log(`MY Data video => ${data.video}`);
        io.emit('upload.video', data.status = "Video enviado com sucesso!");        
    });

    socket.on('disconnect', () => {
        console.log('[SOCKET] Disconnect => A connection was disconnected');
    });

    socket.on('connect_failed', () => {
        console.log('Connection Failed');
    });
    
});

server.listen(SERVER_PORT, SERVER_HOST, () => {
    console.log(`[http] Listen => Server is running at http://${SERVER_HOST}:${SERVER_PORT}`);
    console.log('[http] Listen => Press CTRL+C to stop it');
});