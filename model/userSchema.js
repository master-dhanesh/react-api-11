const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
    {
        username: {
            type: "String",
            required: [true, "Username is required"],
            minLength: [4, "Username must be atleast 4 character long"],
            trim: true,
            unique: true,
        },
        password: {
            type: "String",
            select: false,
            required: [true, "Password is required"],
            minLength: [6, "Password must be atleast 4 character long"],
            match: [
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{6,}$/,
                "Password require atleast 1 characher(upper/lower),number and symbol",
            ],
        },
        email: {
            type: "String",
            required: [true, "Email is required"],
            match: [
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                "Email is invalid",
            ],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("user", userModel);
