getUsers = (req, res)=> res.status(200).send("Here is your list of users")

loginUser = (req, res) => { 
    const {name, password} = req.body
    
    if(name.toLowerCase() == "david" && password == "password123") {
        res.status(200).send({message: "Welcome David", authenticated: true})
    }
    else {
        res.status(401).send({message: "User not found, who are you?", authenticated: false})
    }
}

module.exports = {getUsers, loginUser}
