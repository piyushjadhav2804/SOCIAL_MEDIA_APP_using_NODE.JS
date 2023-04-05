<<<<<<< HEAD
const mongoose = require('mongoose');   

const userSchema = new mongoose.Schema({
=======
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
>>>>>>> manual-local-auth

    email: {
        type: String,
        required: true,
<<<<<<< HEAD
        unique: true 
=======
        unique: true
>>>>>>> manual-local-auth
    },

    password: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

<<<<<<< HEAD

=======
>>>>>>> manual-local-auth
const User = mongoose.model('User', userSchema);

module.exports = User;