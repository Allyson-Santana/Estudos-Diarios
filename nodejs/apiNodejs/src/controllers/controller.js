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
        let responseJson = { error: '', result: {} };
        let inforUpdate = {
            id: req.params.id,
            title: req.body.title
        };
        let {id, title} = inforUpdate; 
        if(id && title) {
            await service.update(inforUpdate);
            responseJson.result = {id, title}
        } else {
            responseJson.error = "Opsss... Algo error ao atualizar";
        }
        
        res.json(responseJson);
    },

    destroy: async (req, res) => {
        let responseJson = { error: '', result: {} };

        await service.destroy(req.params.id);
        responseJson.result = "Usuário excluido com sucesso!";

        res.json(responseJson);
    }

}