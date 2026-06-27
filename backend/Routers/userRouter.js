let express = require("express")
let router = express.Router()

const data = require("../Controllers/UserController")

router.post("/register",data.register)
router.post("/login",data.login)
router.get("/getUser/:userid",data.getUser)

module.exports = router