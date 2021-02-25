const express = require("express");
const eventsRouter = require("./routes/event-router")
const usersRouter = require("./routes/user-router")
const app = express();
const port = 8081;

app.use(express.json())

app.listen(port, () => {console.log(`Application listening on http://localhost:${port}`)})

app.get("/", (req, res) => {res.send("Successful get at top level index.js")})
app.use("/events", eventsRouter)
app.use("/users", usersRouter) 

