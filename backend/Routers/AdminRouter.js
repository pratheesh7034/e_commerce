const express = require("express");
const router = express.Router();

const admin = require("../Controllers/AdminController");

// Dashboard
router.get("/dashboard", admin.getDashboard);

module.exports = router;