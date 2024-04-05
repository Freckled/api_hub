const express = require("express");
const router = express.Router();

const Location = require('../models/location.model');
const { Types } = require('mongoose');
//const {getLocationList} = require("./controllers/location.controller");
//const {getLocationById} = require("./controllers/location.controller");
//const {getLocationDealList} = require("./controllers/deal.controller");
//const {getLocationDealById} = require("./controllers/deal.controller");

router.get('/id/:id', async (req, res) => {
    let objectId = new Types.ObjectId(req.params.id);
    let location = await getLocationById(objectId);
    res.send(location);
});


/**
 * As soon as a call comes in at x.x.x.x:PORT/Locations this code will run. It will run the function getLocationList
 * (which returns a list of locations) based on the provided parameters latitude, longitude and radias (in km).
 * @param radius the radius in kilometers
 * @param lat the latitude coordinates in doubles
 * @param lon the longitude coordinates in doubles
 */

router.post('/add', async (req, res) => {
    //let token = req.headers["x-access-token"];
    /*
    await getUserByToken(token).then(async user => {
        console.log(user);
        if (user != null && user.isAdmin === true) {
            let reqWord = req.body;
            console.log(req.body);
           //add location here
            });
        } else {
            res.status(401).send({message: "Unauthorized!"});
        }
    });
     */

    let location = new Location({name:req.body.Name, lat:req.body.Lat, lon:req.body.Lon, services:req.body.Services});

    await locationController.addLocation(location).then(result => {
        res.send(result);
    });

});

module.exports = router