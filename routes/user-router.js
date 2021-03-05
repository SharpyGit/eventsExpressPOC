const express = require('express')
const userCtrl = require("../controllers/user-ctrl")

const router = express.Router()

router.get("/", userCtrl.getUsers)
router.post("/", userCtrl.loginUser)

module.exports = router