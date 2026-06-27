const Product = require("../Models/ProductSchema");
const User = require("../Models/UserSchema");
const Order = require("../Models/OrderSchema");

const getDashboard = async (req, res) => {
    try {

        const totalProducts = await Product.countDocuments();

        // Count only normal users (exclude admins)
        const totalUsers = await User.countDocuments({
            role: "user"
        });

        const totalOrders = await Order.countDocuments();

        res.json({
            success: true,
            totalProducts,
            totalUsers,
            totalOrders
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            msg: err.message
        });

    }
};

module.exports = {
    getDashboard
};