const service = require('../services/service');

module.exports = {

    findAll: async (req, res) => {
        let responseJson = { error: '', result: [] };
        let notes = await service.getFindAll();

        for(let i in notes) {
            responseJson.result.push({
                id: notes[i].id,
                title: notes[i].title
            });
        }

        res.json(responseJson);
    },

    find: async (req, res) => {
        let responseJson = { error: '', result: {} };
        let note = await service.getFind(req.params.id);

        if(note) responseJson.result = note;

        res.json(responseJson);
    },

    create: async (req, res) => {
        let responseJson = { error: '', result: {} };        

        if(req.body.title) {
            noteId = await service.createNew(req.body.title);
            responseJson.result = {
                id: noteId,        
                title: req.body.title
            }
        } else {
            responseJson.error = "Campos não enviados";    
        }
        
        res.json(responseJson);
    },

    update: async (req, res) => {
        res.send({ping: 'OK'});
    },

    destroy: async (req, res) => {
        res.send({ping: 'OK'});
    }

}