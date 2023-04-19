const Post = require('../models/post')

module.exports.home = function(req, res) {

    Post.find({})
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        }
    })
    .then((posts) => {

        // console.log(req.cookies);
        // console.log('posts', posts);

        return res.render('home', {
            title: 'Home',
            posts: posts    
        });
    });
}