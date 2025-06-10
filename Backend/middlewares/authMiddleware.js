const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const blackListTokenModel = require("../models/blackLIstTokenModel");
const { userModel } = require("../models/userModel");
const captainModel = require("../models/captainModel");

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const isBlackListed = await blackListTokenModel.findOne({ token: token });

    if (isBlackListed) {
        return res.status(401).json({message: "Unauthorized"});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);

        req.user = user;

        return next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
}

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({message: "Unauthorized"});
    }

    const isBlackListed = await blackListTokenModel.findOne({token: token});

    if (isBlackListed) {
        return res.status(401).json({message: "UnAuthorized"});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
    } catch (err) {
        res.status(404).json({message: "Unauthorized"});
    }
}