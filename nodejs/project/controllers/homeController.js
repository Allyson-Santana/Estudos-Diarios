const mongoose = require('mongoose');
const Post = mongoose.model('Post');

exports.userMiddleware = (req, res, next) => {

    // imagine isso como uma pesquisa no banco, voltando as infors no usuário solicitado
    let infors = { id: '01', name: 'Maria clara' }; 

    req.infors = infors;

    next();
}

exports.index = async (req, res) => {
    
    let responseJson = {
        title: 'My title',
        userInfors: req.infors,
        posts:[]
    }    

    const posts = await Post.find({});

    responseJson.posts = posts;

    res.render('home', responseJson);
    
}