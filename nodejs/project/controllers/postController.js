const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const slug = require('slug');

exports.add = (req, res) => {
    res.render('postAdd');
}


exports.addAction = async (req, res) => {

    req.body.tags = req.body.tags.split(',').map(item => item.trim());

    const post = new Post({
        title: req.body.title,
        slug: req.body.slug,
        body: req.body.desc,
        tags: req.body.tags,
    });

    try {
        await post.save();
    } catch (error) {
        req.flash('error', `Error: ${error.message}`);
        return res.redirect('/post/add');
    }

    req.flash('success', 'Post Salvo com sucesso!');

    res.redirect('/');
}


exports.edit = async (req, res) => {
   const post = await Post.findOne({ slug: req.params.slug });
   res.render('postEdit', {post});
}
exports.editAction = async (req, res) => {

    req.body.tags = req.body.tags.split(',').map(item => item.trim());
    req.body.slug = slug(req.body.title, {lower: true});

    const postUpdate = {
        title: req.body.title,
        slug: req.body.slug,
        body: req.body.desc,
        tags: req.body.tags,
    }
    try {
        await Post.findOneAndUpdate(
            {slug: req.params.slug}, // quem quero atualizar
            postUpdate, // dados atualizados
            {
                new: true, // retorna NOVO item atualizado
                runValidators: true // Obriga a usar as validações do meu Models Post padrão
            } 
        );
    } catch (error) {
        req.flash('error', "Não foi pocivel atualizar o post!");
        return res.redirect(`/post/${req.params.slug}/edit`);
    }

    req.flash('success', "Post Atualizado com sucesso!");
    res.redirect('/');
 }