const Comment = require('../models/comment');
const Post = require('../models/post');

module.exports.create = (req, res) => {

    Post.findById(req.body.post).then((post) => {

        if(post) {
            Comment.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            }).then((comment) => {
                console.log('reached here~!!!!!!!!!!')
                post.comments.push(comment); 
                post.save();
                console.log('comment added');
                res.redirect('back'); 
            });
        }       
    });
}