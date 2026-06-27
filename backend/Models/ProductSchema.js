const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String },
    slug: { type: String, unique: true },
    description: { type: String },
    price: { type: Number },
    discountPrice: { type: Number },
    stock: { type: Number },
    category: { type: String },
    images: { type: Object },
    isActive: { type: Boolean },

}, {
    timestamps: true
})

module.exports = mongoose.model("Product", productSchema)