const mongoose = require('mongoose');
//const mongoDbUri = "mongodb+srv://eventdbcluster.juzve.mongodb.net/TdpEventCalendar?retryWrites=true&w=majority";
const mongoDbUri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

mongoose.connect(mongoDbUri, {useNewUrlParser: true,useUnifiedTopology: true})
        .then(()=> console.log("mongodb connected"))
        .catch(error => {
            console.error("Unable to connect to MongoDb cluster, error message is: ", error.message)
        })

module.exports = mongoose.connection
