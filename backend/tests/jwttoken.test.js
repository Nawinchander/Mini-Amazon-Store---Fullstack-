// .set(
//     "Authorization",
//     process.env.TEST_TOKEN
// )


// requires a valid test token.

// For a simple project, I recommend making your authentication middleware accept a dedicated test token only when NODE_ENV === "test".//

const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {

    const token =
        req.headers.authorization;

    if (
        process.env.NODE_ENV === "test" &&
        token === "test-token"
    ) {

        req.user = {
            id: "test-user"
        };

        return next();

    }

    if (!token) {

        return res
            .status(401)
            .json({
                message: "Unauthorized"
            });

    }

    try {

        const decoded =
            jwt.verify(
                token,
                process.env.JWT_SECRET
            );

        req.user = decoded;

        next();

    } catch (error) {

        return res
            .status(401)
            .json({
                message: "Invalid token"
            });

    }

};

module.exports = auth;







