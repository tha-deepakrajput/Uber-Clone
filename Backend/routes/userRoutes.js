const express = require("express");
const { body } = require("express-validator");

const userConroller = require("../controllers/userController");

const router = express.Router();

router.post("/register", [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullName.firstName").isLength({ min: 3 }).withMessage("First name must be at least 3 character long"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 character long"),
],
    userConroller.registerUser
);

router.post("/login", [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({ min: 6 }).withMessage("password must be at least 6 characters long"),
],
    userConroller.loginUser
)

module.exports = router;