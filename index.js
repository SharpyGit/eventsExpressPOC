const express = require("express");
const app = express();
const port = 8081;

app.use(express.json())

app.listen(port, () => {console.log(`Application listening on http://localhost:${port}`)})

app.get("/", (req, res) => {res.send("Middleware is working")})

app.post("/", (req, res) => {
    
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

