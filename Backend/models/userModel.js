const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
    fullName: {
        firstName: {
            type: String, 
            required: true,
            minLength: [3, 'First name must be at least 3 character long'],
        },
        lastName: {
            type: String, 
            minLength: [3, 'Last name must be at least 3 character long'],
        },
    },
    email: {
        type: String, 
        required: true, 
        unique: true, 
        minLength: [5, 'Email must be at leat 5 character long'],
    },
    password: {
        type: String, 
        required: true,
        select: false,
    },
    socketId: {
        type: String,
    },
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}