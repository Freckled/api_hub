const mongoose = require('mongoose');
const questionSchema = require("./question.model");

// Define schema for the questionnaire
const questionnaireSchema = new Schema({
    title: String,
    description: String,
    questions: [questionSchema]
});

module.exports = mongoose.model("Questionaire", questionnaireSchema);

