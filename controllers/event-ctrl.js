const Event = require("../models/event-model")

getEvents = (req, res) => res.status(200).send("Successful get request for events")

createEvent = (req, res) => { 
    //const body = req.body
    // below is the equivalent but using deconstructing to create a new constant from the request body
    const {body} = req
    //First, check whether the body of the req (request) is empty
    if(Object.keys(body).length === 0 || !body) {
        return res.status(400).json({
            success: false,
            message: "Cannot create an event, event body cannot be empty"
        })
    }
    //Secondly, check if the body structure matches our schema's model
    const event = new Event(body)
    const error = event.validateSync()

    //If the body structure does not match the schema model then return the inbuilt error message
    if (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
    //If all checks passed then save the event to MongoDB
    event.save()
        .then(() => {
            return res.status(201).json({
                success:true,
                id: event._id,
                message: "Event successfully created"
            })
        })
        .catch((err) => {
            return res.status(400).json({
                success: false,
                message: "unknown error when attempting to save event to MongoDB",
                error: err
            })
        })
}

module.exports = {getEvents, createEvent}