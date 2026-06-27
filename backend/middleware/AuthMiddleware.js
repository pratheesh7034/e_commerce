const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {

    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            msg: "Access Denied"
        });
    }

    try {

        const decoded = jwt.verify(token, "secretkey");

        req.user = decoded;

        next();

    } catch (err) {

        return res.status(401).json({
            msg: "Invalid Token"
        });

    }

};

module.exports = authMiddleware;