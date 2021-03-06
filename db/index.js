const mongoose = require('mongoose');
const mongoDbUri = "mongodb+srv://eventdbcluster.juzve.mongodb.net/TdpEventCalendar?retryWrites=true&w=majority";
const connectionParameters = {
    dbName: 'TdpEventCalendar',
    user: 'David',
    pass: 'david',
    useUnifiedTopology: true,
    useNewUrlParser: true
    }

mongoose.connect(mongoDbUri, connectionParameters)
        .then(()=> console.log("mongodb connected"))
        .catch(error => {
            console.error("Unable to connect to MongoDb cluster, error message is: ", error.message)
        })

module.exports = mongoose.connection
