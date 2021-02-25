const { Router } = require('express')
const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send({message: "Successful get request at event-router.js" })
})

module.exports = router