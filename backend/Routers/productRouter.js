const express = require("express");
const router = express.Router();

const product = require("../Controllers/ProductController");
const upload = require("../middleware/upload");

const adminMiddleware = require("../Middleware/AdminMiddleware");

// =========================
// Public Routes
// =========================

router.get("/getproduct", product.getProduct);

router.get("/getproduct/:id", product.getProductById);

// =========================
// Admin Routes
// =========================

router.post(
    "/addproduct",
    adminMiddleware,
    upload.single("images"),
    product.addProduct
);

router.put(
    "/updateproduct/:id",
    adminMiddleware,
    upload.single("images"),
    product.updateProduct
);

router.delete(
    "/deleteproduct/:id",
    adminMiddleware,
    product.deleteProduct
);

module.exports = router;