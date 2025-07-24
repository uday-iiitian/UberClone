const userModel = require('../models/user-model');
const userServices = require('../services/user-services');
const { validationResult } = require('express-validator');

module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    console.log({ body: req.body });
    const { fullname, email, password } = req.body;

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userServices.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });

    const token = user.generateAuthToken(user);
    console.log(token);
    res.status(201).json({ token, user});
}