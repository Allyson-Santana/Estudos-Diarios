
const db = require('../database');

module.exports = { 
    getFindAll: () => {
            return new Promise( (resolve, reject) => {          
                db.query('SELECT * FROM notes', (error, result) => {
                if(error) return reject(error); 
                resolve(result);            
            });        
        });        
    },

    getFind: (id) => {
        return new Promise( (resolve, reject) => {
            db.query('SELECT * FROM notes WHERE id = ?', [id], (error, result) => {
                if(error) return reject(error);
                if(result.length > 0) {
                    resolve(result);
                } else {
                    resolve(false);
                }

            });
        });
    },
    createNew: (title) => {
        return new Promise ( (resolve, reject) => {
            db.query('INSERT INTO notes VALUES(default, ?)', [title], (error, result) => {
                if(error) return reject(error);
                resolve(result.insertId);
            });
        });
    }, 
    update: ({ title, id }) => {
        return new Promise( (resolve, reject) => {
            db.query('UPDATE notes SET title = ? WHERE id = ?', [title, id], (error, result) => {
                if(error) return reject(error);
                resolve(result);
            });
        });
    },
    destroy: (id) => {
        return new Promise ((resolve, reject) => {
            db.query('DELETE FROM notes WHERE id = ?',[id], (error, result) => {
                if(error) return reject(error);
                resolve(result);
            });
        });
    }
}