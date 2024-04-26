const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema for the question
const questionSchema = new Schema({
    question_id: String,
    text: String,
    type: { type: String, enum: ['multiple_choice', 'text', 'checkbox'] },
    options: [String] // Optional field, applicable for multiple choice and checkbox questions
});

module.exports = mongoose.model("Questionaire", questionSchema);