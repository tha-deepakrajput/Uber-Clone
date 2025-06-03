const { validationResult } = require("express-validator");

const { userModel } = require("../models/userModel");
const userService = require("../services/userService");

module.exports.registerUser = async (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(404).json({ errors: errors.array() });
    }

    const { fullName, email, password } = req.body;

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstName: fullName.firstName,
        lastName: fullName.lastName,
        email,
        password: hashedPassword,
    });

    const token = user.generateAuthToken();

    res.status(201).json({ token, user });
}