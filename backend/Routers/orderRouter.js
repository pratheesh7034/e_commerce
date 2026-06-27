const express = require("express");
const router = express.Router();

const { placeOrder,getOrder } = require("../Controllers/OrderController");

router.post("/placeorder", placeOrder);
router.get("/getorder",getOrder);
module.exports = router;