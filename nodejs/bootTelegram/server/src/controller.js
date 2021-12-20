const { 
  URL_TELEGRAM, 
  BOT_CHAT_ID, 
  BOT_TOKEN,
  TIKTOK_ID,
  TIKTOK_TOKEN
 } = process.env;
const axios = require('axios');

module.exports = {

    sendMessage: async ({ id, message }) => { // O id eu peguei para caso eu futuralmente eu use
        let error = '';
        await axios.post(`${URL_TELEGRAM}${BOT_TOKEN}/sendMessage`, {
            chat_id: BOT_CHAT_ID,
            text: message
        })
          .catch( (err) => {
            console.log(err);
            error = err;
          });

        return error;        
    },

    uploadTiktok: () => {

    }
}