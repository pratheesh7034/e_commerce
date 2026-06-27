const Product = require("../Models/ProductSchema");

// =======================
// Add Product
// =======================
const addProduct = async (req, res) => {

    try {

        const product = new Product({
            name: req.body.name,
            slug: req.body.slug,
            description: req.body.description,
            price: req.body.price,
            discountPrice: req.body.discountPrice,
            stock: req.body.stock,
            category: req.body.category,
            images: req.file,
            isActive: true
        });

        await product.save();

        res.json({
            success: true,
            msg: "Product Added Successfully",
            product
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            msg: err.message
        });

    }

};

// =======================
// Get All Products
// =======================
const getProduct = async (req, res) => {

    try {

        const product = await Product.find();

        res.json({
            success: true,
            data: product
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            msg: err.message
        });

    }

};

// =======================
// Get Product By Id
// =======================
const getProductById = async (req, res) => {

    try {

        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                msg: "Product Not Found"
            });
        }

        res.json({
            success: true,
            data: product
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            msg: err.message
        });

    }

};

// =======================
// Update Product
// =======================
const updateProduct = async (req, res) => {

    try {

        const updateData = {
            name: req.body.name,
            slug: req.body.slug,
            description: req.body.description,
            price: req.body.price,
            discountPrice: req.body.discountPrice,
            stock: req.body.stock,
            category: req.body.category
        };

        if (req.file) {
            updateData.images = req.file;
        }

        const product = await Product.findByIdAndUpdate(
            req.params.id,
            updateData,
            {
                new: true
            }
        );

        if (!product) {

            return res.status(404).json({
                success: false,
                msg: "Product Not Found"
            });

        }

        res.json({
            success: true,
            msg: "Product Updated Successfully",
            data: product
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            msg: err.message
        });

    }

};

// =======================
// Delete Product
// =======================
const deleteProduct = async (req, res) => {

    try {

        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {

            return res.status(404).json({
                success: false,
                msg: "Product Not Found"
            });

        }

        res.json({
            success: true,
            msg: "Product Deleted Successfully"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            msg: err.message
        });

    }

};

module.exports = {

    addProduct,
    getProduct,
    getProductById,
    updateProduct,
    deleteProduct

};