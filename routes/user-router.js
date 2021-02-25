const express = require('express')

const router = express.Router()

router.get("/", (req, res)=> {res.status(200).send({message: "get request to user-router.js successful"})})

router.post("/", (req, res) => {
    
    console.log(`req: `, req.body)
    const name = req.body.name
    const password = req.body.password

    if(name.toLowerCase() == "david" && password == "password123") {
        res.status(200).send({message: "Welcome David", authenticated: true})
    }
    else {
        res.status(401).send({message: "User not found, who are you", authenticated: false})
    }
})

module.exports = router