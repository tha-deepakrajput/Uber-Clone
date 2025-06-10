const { validationResult } = require("express-validator");

const captainModel = require("../models/captainModel");
const captainService = require("../services/captainService");

module.exports.registerCaptain = async (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(404).json({ errors: errors.array() });
    }

    const {fullName, email, password, vehicle} = req.body;

    const isCaptainAlreadyExist = await captainModel.findOne({email});

    if(isCaptainAlreadyExist) {
        return res.status(400).json({message: "Captain Already Exist"});
    }

    const hashedPassword = await captainModel.hashPassword(password);
    
    const captain = await captainService.createCaptain({
        firstName: fullName.firstName,
        lastName: fullName.lastName,
        email,
        password: hashedPassword, 
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType,
    });

    const token = captain.generateAuthToken();

    res.status(201).json({token, captain});
}