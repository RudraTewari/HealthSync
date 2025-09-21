// src/Middleware/authUser.js
const jwt = require("jsonwebtoken");
const userModel = require("../Schema/userModel.js");

const userAuth = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({ success: false, message: "Not Authorized. Login Again" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded.id).select("-password"); // exclude password

        if (!user) {
            return res.status(401).json({ success: false, message: "User not found" });
        }

        req.user = user; // ✅ attach full user
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: error.message });
    }
};

module.exports = userAuth;
