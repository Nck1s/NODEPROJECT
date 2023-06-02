const User = require("../api/models/user.models");

const validateEmail = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    return regex.test(String(email).toLowerCase());
}

const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    return regex.test(String(password));
}

const usedEmail = async(email) => {
    const users = await User.find({ email: email });
    console.log(users.length);
    return users.length;
}

module.exports = { validatePassword, validateEmail, usedEmail };