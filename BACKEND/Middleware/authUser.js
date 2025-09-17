// src/Middleware/authUser.js
const jwt = require("jsonwebtoken");

const userAuth = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({ success: false, message: "Not Authorized. Login Again" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (decoded.id) {
            req.user = { id: decoded.id }; // attach user id to req
            next();
        } else {
            return res.status(401).json({ success: false, message: "Not Authorized. Login Again" });
        }
    } catch (error) {
        return res.status(401).json({ success: false, message: error.message });
    }
};

module.exports = userAuth;
