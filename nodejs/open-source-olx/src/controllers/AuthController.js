const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { validationResult, matchedData } = require('express-validator');

const User = require('../models/User');
const State = require('../models/State');

module.exports = {
    singIn: async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            res.json({error: errors.mapped()});
            return;
        }
        const data = matchedData(req);
        
        const user = await User.findOne({email: data.email});
        if(!user) {
            res.json({error: "E-mail e/ou senha inváilida"});
            return;
        }

        const match = await bcrypt.compare(data.password, user.passwordHash);
        if(!match) {
            res.json({error: "E-mail e/ou senha inválida"});
            return;
        }

        const payload = (Data.now() + Math.random()).toString();
        const token = await bcrypt.hash(payload, 10);
        user.token = token;
        await user.save();

        res.json({token});
    },

    singUp: async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            res.json({error: errors.mapped()});
            return;
        }
        const data = matchedData(req);

        const user = await User.findOne({email: data.email});
        if(user) {
            res.json({
                error: {email: { msg: "E-mail já existe!"} }
            });
            return;
        } 

        if(mongoose.Types.ObjectId.isValid(data.state)) {
            const state = await State.findById(data.state);
            if(!state) {
                res.json({
                    error: { state: { msg: "Estado não encontrado!" } }
                });
                return;
            }
        } else {
            res.json({
                error: { state: { msg: "código de estado inválido!" } }
            });
            return;
        }
       
        const passwordHash = await bcrypt.hash(data.password, 10);
        const payload = (Date.now() + Math.random()).toString();
        const token = await bcrypt.hash(payload, 10);

        const newUser = new User({
            name: data.name,
            email: data.email,
            passwordHash,            
            token,
            state: data.state,
        });
        await newUser.save();

        res.json({token});
    }
}