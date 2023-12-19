const User = require("../model/userSchema");

exports.test = (req, res, next) => {
    res.status(200).json({ success: true, message: "Test route." });
};

exports.create = async (req, res, next) => {
    try {
        const newuser = new User(req.body);
        await newuser.save();
        res.status(201).json({ success: true, newuser });
    } catch (error) {
        next(error);
    }
};

exports.readall = async (req, res, next) => {
    try {
        const users = await User.find();
        // const users = await User.find().select("+password");
        res.status(201).json({
            success: true,
            message: "User Successfully Created!",
        });
    } catch (error) {
        next(error);
    }
};
