const jwt = require("jsonwebtoken");

const adminMiddleware = (req, res, next) => {

    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            msg: "Access Denied. No Token Provided."
        });
    }

    try {

        const decoded = jwt.verify(token, "secretkey");

        if (decoded.role !== "admin") {
            return res.status(403).json({
                msg: "Only Admin Can Access This Route"
            });
        }

        req.user = decoded;

        next();

    } catch (err) {

        return res.status(401).json({
            msg: "Invalid Token"
        });

    }

};

module.exports = adminMiddleware;