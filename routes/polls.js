const express = require("express");
const router = express.Router();

const { Types } = require('mongoose');

router.get('/questionaires', async (req, res) => {
    //let objectId = new Types.ObjectId(req.params.id);
    //let location = await getLocationById(objectId);
    //res.send(location);
});

router.get('/questionaire/:id', async (req, res) => {
    //let objectId = new Types.ObjectId(req.params.id);
    //let location = await getLocationById(objectId);
    //res.send(location);
    res.send("questionaire get path");
});

router.get('/questions/:questionaireId', async (req, res) => {
    //let objectId = new Types.ObjectId(req.params.id);
    //let location = await getLocationById(objectId);
    //res.send(location);
});

router.post('/question/:id', async (req, res) => {
    //let objectId = new Types.ObjectId(req.params.id);
    //let location = await getLocationById(objectId);
    //res.send(location);
});

router.post('/answers/question/:questionID', async (req, res) => {
res.send("test");
});

router.post('/answers/questionaire/:questionaireID', async (req, res) => {
    res.send("test");
});

module.exports = router
