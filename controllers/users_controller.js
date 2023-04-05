const User = require('../models/user');

module.exports.profile = (req, res) => {

    res.render('user_profile', {
        title: 'User Profile'
    });
}

// renders the sign up page
module.exports.signUp = (req, res) => {

    return res.render('user_sign_up', {
        title: 'User Sign Up'
    });
}

// renders the sign in page
module.exports.signIn = (req, res) => {

    return res.render('user_sign_in', {
        title: 'User Sign In'
    });
}

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
            User.create(req.body);
            console.log('User added successfully');
            return res.redirect('/users/sign-in');
        }
    });
}

module.exports.createSession = (req, res) => {
    
    console.log(req.body);

    return res.redirect('back');
}