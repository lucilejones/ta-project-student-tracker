const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', async function(next) {
    const user = this;
    if(user.isModified('password')) {
        try {
            const hash = await bcrypt.hash(user.password, 10);
            user.password = hash;
        } catch (error) {
            return next(error);
        }
    }
})

userSchema.methods.checkPassword = async function(passwordAttempt) {
    try {
        return bcrypt.compare(passwordAttempt, this.password);
    } catch (error) {
        throw(error);
    }
}


module.exports = mongoose.model("User", userSchema);