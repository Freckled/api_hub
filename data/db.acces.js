const mongoose = require("mongoose");

exports.connectDB = async (connectionString) => {
    try {
        await mongoose.connect(connectionString, {});
        console.log("CONNECTED TO DATABASE SUCCESSFULLY");
    } catch (error) {
        console.error('COULD NOT CONNECT TO DATABASE:', error.message);
    }
};

