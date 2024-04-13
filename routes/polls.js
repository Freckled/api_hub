const express = require("express");
const router = express.Router();

const { Types } = require('mongoose');

router.get('/questionaires', async (req, res) => {
    //let objectId = new Types.ObjectId(req.params.id);
    let questionaireList = await getQuestionaires();
    res.send(questionaireList);
});

router.get('/questionaire/:id', async (req, res) => {
    let objectId = new Types.ObjectId(req.params.id);
    let questionaire = await getQuestionaireById(objectId);
    res.send(questionaire);
    //res.send("questionaire get path");
});

router.get('/questions/:id', async (req, res) => {
    let objectId = new Types.ObjectId(req.params.id);
    let questions = await getQuestionsById(objectId);
    res.send(questions);
});

router.post('/answers/question/:questionID', async (req, res) => {
    let questionPost = await postQuestion(objectId);
    res.send(questionPost);
});

router.post('/answers/questionaire/:questionaireID', async (req, res) => {
    let questionairePost = await postQuestionaire(objectId);
    res.send(questionairePost);
});

module.exports = router
