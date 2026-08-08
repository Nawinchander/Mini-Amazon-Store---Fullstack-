//// Verify JWT Token.


const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {

    const token = req.headers.authorization;

    if (!token) {

        return res.status(401).json({

            message: "No Token"

        });

    }

    jwt.verify(token, process.env.JWT_SECRET, (err) => {

        if (err) {

            return res.status(403).json({

                message: "Invalid Token"

            });

        }

        next();

    });

};

module.exports = auth;




