const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

exports.createUser = async (req, res) => {
    const { name, email } = req.body;
    const user = new User({ name, email });
    await user.save();
    res.status(201).json(user);
};