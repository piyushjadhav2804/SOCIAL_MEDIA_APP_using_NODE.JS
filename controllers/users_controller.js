const User = require('../models/user');

module.exports.profile = (req, res) => {


    User.findById(req.params.id).then((user) => {

        res.render('user_profile', {
            title: 'User Profile',
            profile_user: user 
        });
    });
}

module.exports.update = (req, res) => {

    if(req.user.id == req.params.id) {

        User.findByIdAndUpdate(req.params.id, req.body).then((user) => {
            return res.redirect('back');
        });
    }

    else {
        return res.status(401).send('Unauthorized');
    }
}

// renders the sign up page
module.exports.signUp = (req, res) => {

    if(req.isAuthenticated()) {
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_up', {
        title: 'User Sign Up'
    });
}

// renders the sign in page
module.exports.signIn = (req, res) => {

    if(req.isAuthenticated()) {
        return res.redirect('/users/profile');
    }

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
    
    req.flash('success', 'Logged in successfully');
    return res.redirect('/');
}

module.exports.destroySession = (req, res) => {
    
    // req.logout(()=>{
    //     req.flash('success', 'You have logged out');    
    // });

    req.flash('success', 'You have logged out');
    req.logout(function(){
        req.flash('success', 'You have logged out');
        console.log('Logged out!!!');
    });
    req.flash('success', 'You have logged out');
    return res.redirect('/');
}