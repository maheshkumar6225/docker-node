const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://mongo-service:27017/test-docker');
        console.log("Connected to db successfully");
    } catch (ex) {
        console.log(ex,"Not connected");
    }
}

module.exports = {
    connect
}
