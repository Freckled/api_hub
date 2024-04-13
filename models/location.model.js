const mongoose = require('mongoose');
const { Schema } = mongoose;

const locationSchema = new Schema({
    address: String, // String is shorthand for {type: String}
    lat: Number,
    lon: Number
});
