const express = require("express");
const UserModel = require("../model/user.model");
const AddressModel = require("../model/address.model");
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
    const { name, address, city, state, zip } = req.body;
    
    try {
        const existingUser = await UserModel.findOne({ name });
        if (existingUser) {
            return res.status(400).send({ msg: "User with this name already exists." });
        }
        
        const user = new UserModel({ name });
        await user.save();

        const userAddress = new AddressModel({
            address,
            city,
            state,
            zip,
            userID: user._id, 
        });

        await userAddress.save();
        res.status(200).send({ msg: "Successfully Registered and Address Added." });

    } catch (err) {
        res.status(500).send({ msg: "Failed to register user and address." });
    }
});

userRouter.post("/add-address", async (req, res) => {
    const { name, address, city, state, zip } = req.body;

    try {

        const user = await UserModel.findOne({ name });
        if (!user) {
            return res.status(404).send({ msg: "User not found." });
        }

        const newAddress = new AddressModel({
            address,
            city,
            state,
            zip,
            userID: user._id, 
        });

        await newAddress.save();
        res.status(200).send({ msg: "Address added successfully." });

    } catch (err) {
        res.status(500).send({ msg: "Failed to add address." });
    }
});

module.exports = userRouter;
