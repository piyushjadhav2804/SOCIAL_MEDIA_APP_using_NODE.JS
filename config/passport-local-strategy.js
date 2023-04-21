const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user')

passport.use('local',new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },

    async (req, email, password, done) => {
        try {
            const user = await User.findOne({email: email});

            if(!user || user.password != password) {
                req.flash('Invalid Username/Password');
                console.log('Invalid Username/Password')
                return done(null, false, {message: 'Invalid email or password'});
            }

            return done(null, user);
        }
        catch(err) {
            req.flash('error', err)
            return done(err);
        }
    }
));

passport.serializeUser((user, done) => {

    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {

    try {
        const user = await User.findById(id);
        return done(null, user);
    }
    catch(err) {
        return done(err);
    }
});

//check if user is authenticated 
passport.checkAuthentication = (req, res, next) => {

    if(req.isAuthenticated()) {
        return next();
    }

    return res.redirect('/users/sign-in');
}

passport.setAuthenticatedUser = (req, res, next) => {

    if(req.isAuthenticated()) {
        res.locals.user = req.user;
    }

    next();
}

module.exports = passport;