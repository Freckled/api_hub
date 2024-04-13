const mongoose = require('mongoose');

const answerSchema = {
    _id: {type: mongoose.Schema.Types.ObjectId,  ref: '_id'},
    questionaire_ID:Number,
    questions:{ type : Array , "default" : [] },
    lon:Number,
    lat:Number,
    userID:String,
}

module.exports = mongoose.model("Questionaire", answerSchema);
