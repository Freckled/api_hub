const Questionaire = require("../models/questionaire.model");
const dbConnect = require("../data/db.acces");

const connectionString =`mongodb+srv://${process.env.questionaireDBUserName}:${process.env.questionaireDBPassword}@avans.lvtbins.mongodb.net/${process.env.questionaireDB}?retryWrites=true&w=majority`;
dbConnect.connectDB(connectionString);

exports.getQuestionaireByLocation = async function (location) {
/*
    return await Location.findById(id)
        .then(function (docs) {
            console.log(docs)
            return docs;
        })
        .catch(function (err) {
            console.log(err)
        });

 */
};

exports.getQuestionaireByID = async function (id) {

    return await Questionaire.findById(id)
        .then(function (docs) {
            console.log(docs)
            return docs;
        })
        .catch(function (err) {
            console.log(err)
        });
};

exports.postQuestionaire = async function (questionaire) {

    /*
    return await Location.findById(id)
        .then(function (docs) {
            console.log(docs)
            return docs;
        })
        .catch(function (err) {
            console.log(err)
        });

     */
};
