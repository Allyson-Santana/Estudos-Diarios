
const db = require('../database');

module.exports = { 
    getFindAll: () => {
            return new Promise( (resolve, reject) => {          
                db.query("SELECT * FROM notes", (error, result) => {
                if(error) return reject(error); 
                resolve(result);            
            });        
        });        
    }
}