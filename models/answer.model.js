const mongoose = require('mongoose');


// Define schema for the answer
const answerSchema = new Schema({
    questionnaire_id: String,
    answers: [{
        question_id: String,
        response: Schema.Types.Mixed // Can be any type, depending on the question type
    }]
});

module.exports = mongoose.model("Answer", answerSchema);
