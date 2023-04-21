const Post = require('../models/post');
const Comment = require('../models/comment');

module.exports.create = function(req, res) {

    Post.create({
        content: req.body.content,
        user: req.user._id
    });

    req.flash('success', 'Post published');

    return res.redirect('back');
}


module.exports.destroy = function(req, res) {

    Post.findById(req.params.id).then((post) => {

        // .id means converting the object id into string
        if(post.user == req.user.id) {

            console.log(req.params.id);
            console.log(req.user.id);

            Post.findByIdAndDelete(req.params.id).then(()=>{
                
                Comment.deleteMany({post: req.params.id}).then(() => {
                    req.flash('success', 'Post deleted');
                    return res.redirect('back');
                });
                
                console.log('Post deleted');
            });

        }

        else {
            return res.redirect('back');
        }
            
    });
}