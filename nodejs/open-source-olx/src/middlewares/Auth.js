const User = require('../models/User');

module.exports = {
    private: async (req, res, next) => {
        
        if(!req.query.token && !req.body.token) {
           res.json({notAllowed: true});
           return;
        }
        
        let token = '';        
        if(req.query.token) token = req.query.token;
        if(req.body.token) token = req.body.token;

        token = token.trim();

        if(!token) {
            res.json({notAllowed: true});
            return;
        }

        const userToken = await User.findOne({token});
        if(!userToken) {
            res.json({notAllowed: true});
            return;
        }
        
        next();
    }
}