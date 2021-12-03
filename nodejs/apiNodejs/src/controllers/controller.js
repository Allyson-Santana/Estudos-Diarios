
const service = require('../services/service');

module.exports = {

    findAll: async (req, res) => {
        let responseJson = { error:'', result:[] };

        let notes = await service.getFindAll();

        for(let i in notes) {
            responseJson.result.push({
                id: notes[i].id,
                title: notes[i].title
            });
        }

        res.json(responseJson);
    },

    find: (req, res) => {
        res.send({ping: 'OK'});
    },

    create: (req, res) => {
        res.send({ping: 'OK'});
    },

    update: (req, res) => {
        res.send({ping: 'OK'});
    },

    destroy: (req, res) => {
        res.send({ping: 'OK'});
    }

}