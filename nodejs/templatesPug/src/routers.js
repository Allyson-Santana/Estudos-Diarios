const posts = require('./data/posts.json');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        message: 'Bem Vindo ao site que usa o Pug com sucesso!'
    });
});

router.get('/about', (req, res) => res.render('about'));
router.get('/contact', (req, res) => res.render('contact'));
router.get('/posts', (req, res) => res.render('posts',{posts}));

module.exports = router;