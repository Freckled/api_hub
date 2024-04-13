/**
 * Calculates the minimum and maximum coordinates based on the given coordinates (lon and lat) based on the given
 * radius. The kmDegree is a google maps API based number of kilometers per degree.
 * @param radius the radius in kilometers as int
 * @param lat the latitude coordinates as a double
 * @param lon the longitude coordinates as a double
 * returns an object containing the min and max coordinates based on the given parameters.
 */


function minMaxDistance(lat, lon, radius) {

    const kmDegree = 111.32;
    let degreeAdjust = (radius / kmDegree);

    //test example
    let maxLon = lon+degreeAdjust;
    let minLon = lon-degreeAdjust;
    let maxLat = lat+degreeAdjust;
    let minLat = lat-degreeAdjust;
    //test example

    return {maxLon:maxLon, minLon:minLon, maxLat:maxLat, minLat:minLat}
}

module.exports.minMaxDistance = minMaxDistance;
