const Answers = require("../models/answer.model");
const Questionaire = require("../models/questionaire.model");
const dbConnect = require("../data/db.acces");

const connectionString =`mongodb+srv://${process.env.answerDBUserName}:${process.env.answerDBPassword}@avans.lvtbins.mongodb.net/${process.env.answerDB}?retryWrites=true&w=majority`;
dbConnect.connectDB(connectionString);

exports.getAnswersbyQuestionaireId = async function (id) {

        return await Answers.find(
            {"questionaire_ID": id}
            )
            .then(function (docs) {
                console.log(docs)
                return docs;
            })
            .catch(function (err) {
                console.log(err)
            });

};
