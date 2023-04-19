const Post = require('../models/post');

module.exports.create = function(req, res) {

    Post.create({
        content: req.body.content,
        user: req.user._id
    });

    return res.redirect('back');
}