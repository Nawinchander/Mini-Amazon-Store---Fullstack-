//// auth controllers

////  Simple Login API.


const jwt = require("jsonwebtoken");

const login = (req, res) => {

    const token = jwt.sign({ user: "admin" }, process.env.JWT_SECRET );

    res.json({

        message: "Login Successful",

        token

    });

};

module.exports = { login};




