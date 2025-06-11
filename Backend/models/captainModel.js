const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
            minLength: [3, "Firstname must be at least 3 characters long"],
        },
        lastName: {
            type: String,
            minLength: [3, "Lastname must be at least 3 characters long"],
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "inactive",
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minLength: [3, "Color must be at least 3 characters long"],
        },
        plate: {
            type: String,
            required: true,
            minLength: [3, "Plate must be at least 3 characters long"],
        },
        capacity: {
            type: Number,
            required: true,
            minLength: [1, "Capacity must be at least 1"],
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ["car", "motorCycle", "auto"],
        },
    },
    location: {
        lat: {
            type: Number,
        },
        lng: {
            type: Number,
        },
    },
});

captainSchema.methods.generateAuthToken = () => {
    const token = jwt.sign(
        { _id: this._id },
        process.env.JWT_SECRET,
        { expiresIn: "24h" },
    );
    return token;
}

captainSchema.methods.comparePassword = async function (password) {
    if (!password) throw new Error("Password is required");
    if (!this.password) throw new Error("Stored hashed password is missing");
    return await bcrypt.compare(password, this.password);
};

captainSchema.methods.hashPassword = async function (password) {
    if (!password) throw new Error("Password is required");
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

const captainModel = mongoose.model("captain", captainSchema);

module.exports = captainModel;