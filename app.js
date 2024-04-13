require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require("mongoose");

//const Location = require('./models/location.model');
const locationsRoute = require('./routes/locations')
const pollsRoute = require('./routes/polls')

//const dataBaseName = "WashIT";
//const dbConnect = require('./data/db.acces');
//const locationController = require("./controllers/location.controller");


const port = process.env.PORT || 8080;
mongoose.set("strictQuery", true);

app.use('/locations', locationsRoute);
app.use('/polls', pollsRoute);

app.use(bodyParser.json()); //Handles JSON requests
app.use(bodyParser.urlencoded({ extended: false })); //Handles normal post requests

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});

//const connectionString =`mongodb+srv://${process.env.adminUsername}:${process.env.adminPassword}@avans.lvtbins.mongodb.net/${dataBaseName}?retryWrites=true&w=majority`;
//dbConnect.connectDB(connectionString);

/**
 * Starts the server, listening on the port
 * @param port the port on which to start listening, as integer
 */
app.listen(port, () => console.log(`API on port ${port}!`))
