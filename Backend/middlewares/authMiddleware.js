const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const {userModel} = require("../models/userModel");

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorisation.split(" ")[1];

    if (!token) {
        return res.status(401).json({message: "Unauthorised"});        
    }
}