const User = require('../models/user');
const path = require('path');
const fs = require('fs');

module.exports.profile = (req, res) => {


    User.findById(req.params.id).then((user) => {

        res.render('user_profile', {
            title: 'User Profile',
            profile_user: user 
        });
    });
}

module.exports.update = async (req, res) => {
  
    if (req.user.id == req.params.id) {
        
        try {
            let user = await User.findById(req.params.id);
            User.uploadedAvatar(req, res, function(err) {
                if(err) {console.log('error', err)}

                user.name = req.body.name;
                user.email = req.body.email;

                if(req.file) {

                    //saving the path of uploaded file into the avatar field of User
                    user.avatar = User.avatarPath + '/' + req.file.filename;
                }

                user.save();

                return res.redirect('back');
            })
        }

        catch(err) {
            req.flash('error', err);
            return req.redirect('back');
        }
    }

    else {
        req.flash('error','Unauthorized');
        return res.status(401).send('Unauthorized');
    }
}

// renders the sign up page
module.exports.signUp = (req, res) => {

    if(req.isAuthenticated()) {
        return res.redirect('/');
    }

    return res.render('user_sign_up', {
        title: 'User Sign Up'
    });
}

// renders the sign in page
module.exports.signIn = (req, res) => {

    if(req.isAuthenticated()) {
        return res.redirect('/');
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