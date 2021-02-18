const express = require("express");

const app = express();

const port = 8081;

app.listen(port, () => {console.log(`Application listening on http://localhost:${port}`)})

app.get("/", (req, res) => {res.send("Any string basically, HELLO WORLD!!!!")})