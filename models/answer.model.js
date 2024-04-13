const mongoose = require('mongoose');

const answerSchema = {
    //_id: {type: mongoose.Schema.Types.ObjectId,  ref: '_id'},
    question_ID:Number,
    questionType:String,
    answer:String,
    lon:Number,
    lat:Number,
    userID:String,
}

module.exports = mongoose.model("Answer", answerSchema);
