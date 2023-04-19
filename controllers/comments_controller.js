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

module.exports.destroy = (req, res) => {

    Comment.findById(req.params.id).then((comment) => {

        if(comment.user == req.user.id) {

            let postId = comment.post;

            Comment.findByIdAndDelete(req.params.id).then(() => {

                Post.findByIdAndUpdate(postId, {$pull: {comments: req.params.id}}).then(() => {
                    return res.redirect('back');
                })
            });
        }

        else {
            return res.redirect('back');
        }
    });
}