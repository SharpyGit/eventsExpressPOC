const { Router } = require('express')
const express = require('express')
const eventCtrl = require("../controllers/event-ctrl")
const router = express.Router()

router.get('/', eventCtrl.getEvents)

module.exports = router