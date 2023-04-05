const User = require('../models/user');

<<<<<<< HEAD
//renders user home page
module.exports.profile = (req, res) => {

    res.render('users', {
        title: 'Users Page'
    });
}


//renders the sign up page
module.exports.signUp = (req, res) => {
    
    res.render('user_sign_up', {
=======
module.exports.profile = (req, res) => {

    res.render('user_profile', {
        title: 'User Profile'
    });
}

// renders the sign up page
module.exports.signUp = (req, res) => {

    return res.render('user_sign_up', {
>>>>>>> manual-local-auth
        title: 'User Sign Up'
    });
}

<<<<<<< HEAD
//renders the sign in page
module.exports.signIn = (req, res) => {
    
    res.render('user_sign_in', {
=======
// renders the sign in page
module.exports.signIn = (req, res) => {

    return res.render('user_sign_in', {
>>>>>>> manual-local-auth
        title: 'User Sign In'
    });
}

<<<<<<< HEAD
//get the sign up data
module.exports.create = function(req, res) {

    if(req.body.password != req.body.confirm_password) {
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}).then((err, user)=>{

        if(err) {
            console.log('Cannot add user as email already taken!!!!');
            res.redirect('back');
        }

        else {
            
=======
module.exports.create = (req, res) => {

    if(req.body.password != req.body.confirm_password) {
        console.log('Passwords did not match');
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}).then((user) => {

        if(user) {
            console.log('User not added as email is already taken!!')
            return res.redirect('back');
        }

        else {
>>>>>>> manual-local-auth
            User.create(req.body);
            console.log('User added successfully');
            return res.redirect('/users/sign-in');
        }
<<<<<<< HEAD
    }); 
}

//sign in create session for user
module.exports.createSession = function(req, res) {

=======
    });
}

module.exports.createSession = (req, res) => {
    
    console.log(req.body);

    return res.redirect('back');
>>>>>>> manual-local-auth
}