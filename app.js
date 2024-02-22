require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const { Types } = require('mongoose');
const {getLocationList} = require("./controllers/location.controller");
const {getLocationById} = require("./controllers/location.controller");
const {getLocationDealList} = require("./controllers/deal.controller");
const {getLocationDealById} = require("./controllers/deal.controller");

const Location = require('./models/location.model');

const dataBaseName = "WashIT";
const dbConnect = require('./data/db.access');
const locationController = require("./controllers/location.controller");


const port = process.env.PORT || 8080;
mongoose.set("strictQuery", true);

app.use(bodyParser.json()); //Handles JSON requests
app.use(bodyParser.urlencoded({ extended: false })); //Handles normal post requests

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});

const connectionString =`mongodb+srv://${process.env.adminUsername}:${process.env.adminPassword}@avans.lvtbins.mongodb.net/${dataBaseName}?retryWrites=true&w=majority`;
dbConnect.connectDB(connectionString);

/**
 * As soon as a call comes in at x.x.x.x:PORT/Locations this code will run. It will run the function getLocationList
 * (which returns a list of locations) based on the provided parameters latitude, longitude and radias (in km).
 * @param radius the radius in kilometers
 * @param lat the latitude coordinates in doubles
 * @param lon the longitude coordinates in doubles
 */
app.get('/locations/:radius&:lat&:lon', async (req, res) => {

    let lat = Number(req.params.lat);
    let lon = Number(req.params.lon);
    let radius = Number(req.params.radius) ?? 20;

    //Set Base for NaN.
    if (isNaN(lat) || isNaN(lon) || isNaN(radius)){
        console.log("NaN, using replacements")
        lat = 51.584157902369185;
        lon = 4.797971727278075;
        radius = 20;
    }else{
        console.log("Numbers, using those");
        lat = Number(lat);
        lon = Number(lon);
    }

    let locationList = await getLocationList(lat, lon, radius);
    res.send(locationList);
});

app.get('/locations/id/:id', async (req, res) => {
    let objectId = new Types.ObjectId(req.params.id);
    let location = await getLocationById(objectId);
    res.send(location);
});

app.post('/locations/add', async (req, res) => {
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
//-----------------------------------------------------------
app.get('/deals/location/:locationId', async (req, res) => {
    let locationId = req.params.locationId;
    let locationDealList = await getLocationDealList(locationId);
    res.send(locationDealList);
});

/**
 * As soon as a call comes in at x.x.x.x:PORT/deals this code will run. It will run the function getLocationDealList
 * (which returns a list of deals) based on the provided location via parameters latitude and longitude.
 * @param lat the latitude coordinates in doubles
 * @param lon the longitude coordinates in doubles
 */
app.get('/deals/location/:id', async (req, res) => {
    let objectId = new Types.ObjectId(req.params.id);
    let locationDealById = await getLocationDealById(objectId);
    res.send(locationDealById);
});

/**
 * Starts the server, listening on the port
 * @param port the port on which to start listening, as integer
 */
app.listen(port, () => console.log(`WashIT API on port ${port}!`))