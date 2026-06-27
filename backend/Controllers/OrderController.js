const Order = require("../Models/OrderSchema");

const placeOrder = async (req, res) => {
    try {
        const order = new Order({
            userId: req.body.userId,
            productId: req.body.productId,
            productName: req.body.productName,
            price: req.body.price,
            paymentMethod: req.body.paymentMethod
        });

        await order.save();

        res.json({
            success: true,
            msg: "Order placed successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            msg: error.message
        });
    }
}
    const getOrder = async(req, res)=>{
        try{
            const order = await Order.find()
    .populate("productId")
    .populate("userId");
            
            res.json({
            success: true,
            data: order
        })
        }
        catch(err){
            console.log("GET ORDER ERROR:",err)
            res.status(500).json({success: false,msg:err.message})
        }
    }

module.exports = { placeOrder,getOrder};