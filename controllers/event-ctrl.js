const Event = require("../models/event-model")

getEvents = (req, res) => res.status(200).send("Successful get request for events")

createEvent = (req, res) => { 
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
    console.log(event)
    //If the body structure does not match the schema model then return the inbuilt error message
    if (!event) {
        return res.status(400).json({
            success: false,
            message: "event request body did not match Schema Model required"
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