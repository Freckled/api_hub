const Answers = require("../models/answer.model");
const Questionaire = require("../models/questionaire.model");
const dbConnect = require("../data/db.acces");

const connectionString =`mongodb+srv://${process.env.answerDBUserName}:${process.env.answerDBPassword}@avans.lvtbins.mongodb.net/${process.env.answerDB}?retryWrites=true&w=majority`;
dbConnect.connectDB(connectionString);


exports.getAnswersbyQuestionId = async function (id) {

    return await Answers.find(
        {"question_ID": id}
    )
        .then(function (docs) {
            console.log(docs)
            return docs;
        })
        .catch(function (err) {
            console.log(err)
        });

};

exports.postAnswers = async function (questionaire) {

    //loop through all answers in questionaire and post them (all at once?)

};

exports.postAnswer = async function (questionID) {
    //post single answer
};
