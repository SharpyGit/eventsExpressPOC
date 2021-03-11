const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Event = new Schema(
    {
        name: {type: String, required: true},
        location: {type: String, required: true},
        //date: {type: Date, required: true},
        // capacity: {type: Number, required: true},
        // intake: {type: Number, required: true},
        // programme: {type: String, required: true},
        // coreSelection: {type: String, required: true},
        // attendees: {type: Array, required: true},
    }
)

module.exports = mongoose.model("events", Event)