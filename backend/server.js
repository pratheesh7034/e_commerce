const express = require("express")
const app = express()
let PORT = 3006

const cors = require("cors")
app.use(cors())
app.use(express.json())

const db = require("./Config/database")
const userRoute = require("./Routers/userRouter")
const productRoute = require("./Routers/productRouter")
const orderRoute = require("./Routers/orderRouter")
const adminRoute = require("./Routers/AdminRouter")

app.use("/user", userRoute)
app.use("/product",productRoute)
app.use("/uploads",express.static("uploads"))
app.use("/order", orderRoute)
app.use("/admin", adminRoute)
app.listen(PORT, () => {
    console.log("Server Running")
})