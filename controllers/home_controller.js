<<<<<<< HEAD
//  syntax to write actions for controller =>
//
//  module.exports.actionName = function(req, res) {}


=======
>>>>>>> manual-local-auth
module.exports.home = function(req, res) {

    console.log(req.cookies);

<<<<<<< HEAD
    res.cookie('piyush', 'GOAT');

    return res.render('home', {
        title: 'Social Media App'
=======
    return res.render('home', {
        title: 'Home'
>>>>>>> manual-local-auth
    });
}