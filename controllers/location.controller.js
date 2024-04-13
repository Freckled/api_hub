const Location = require('../models/location.model');
const locationService = require("../services/location.service");


/**
 * Calls the minMaxDisctance function (to determine the minimum and maximum coordinates) and then gets a list of
 * locations fromthe database where the coordinates fit the newly aquired min and max coordinates.
 * @param radius the radius in kilometers
 * @param lat the latitude coordinates as a doubles
 * @param lon the longitude coordinates as a double
 */

exports.getLocationList = async function (lat, lon, radius) {

    let minMax = locationService.minMaxDistance(lat, lon, radius);
    console.log("lat:" + lat +"| lon:"+lon+"| radius:"+radius);

    return await Location.find({
        lon: {$gte: minMax.minLon, $lte: minMax.maxLon},
        lat: {$gte: minMax.minLat, $lte: minMax.maxLat}
    })
        .then(function (docs) {
            console.log(docs)
            return docs;
        })
        .catch(function (err) {
            console.log(err)
        });
};

exports.getLocationById = async function (id) {

    return await Location.findById(id)
        .then(function (docs) {
            console.log(docs)
            return docs;
        })
        .catch(function (err) {
            console.log(err)
        });
};


exports.addLocation = async function (location) {
    //get lat & lon from address
    console.log(location);
    return location.save();
};
